import { Injectable } from '@nestjs/common';
import { Article } from './entity/article.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceResult } from './base/service-result';
import { ReturnMessage } from './base/return-message.enum';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { SearchArticleRequest } from './dto/search-article-request';
import { Review } from './entity/review.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {

  }

  getHello(): string {
    return 'Hello World!';
  }

  getArticles(request: SearchArticleRequest): Promise<ServiceResult<Article[]>> {
    return this.articleRepository.find({
      relations: {
        reviews: true
      }
    }).then(result => {
      return new ServiceResult({
        result: result,
        returnMessage: ReturnMessage.Success,
        serviceType: 'Article',
      });
    }).catch(error => {
      return new ServiceResult({
        returnMessage: ReturnMessage.Danger,
        serviceType: 'Article',
        error: error.message
      });
    })
  }

  getArticle(id: number): Promise<ServiceResult<Article>> {
    return this.articleRepository.findOneBy({ articleID: id }).then(result => {
      return new ServiceResult({
        result: result,
        returnMessage: ReturnMessage.Success,
        serviceType: 'Article',
      });
    }).catch(error => {
      return new ServiceResult({
        returnMessage: ReturnMessage.Danger,
        serviceType: 'Article',
        error: error.message
      });
    })
  }

  createOrUpdate(article: Article): Promise<ServiceResult<boolean>> {
    try {
      return this.articleRepository.findBy({ articleID: article.articleID }).then(result => {
        if (result) {
          return this.articleRepository.save(article).then(result => {
            return new ServiceResult({ returnMessage: ReturnMessage.Success, serviceType: 'Article', result: true });
          })
        } else {
          return this.articleRepository.insert(article).then(result => {
            return new ServiceResult({ returnMessage: ReturnMessage.Success, serviceType: 'Article', result: true });
          })
        }
      })
    } catch (error) {
      var result = new ServiceResult({ returnMessage: ReturnMessage.Danger, serviceType: 'Article', result: false, error: error.message });
      Promise.resolve(result);
    }
  }

  async delete(id: number): Promise<ServiceResult<boolean>> {
    try {

      const { data } = await this.httpService.get<ServiceResult<Review[]>>(`${this.configService.get('API_GATEWAY_URL')}/review`, {
        params: {
          articleID: id
        }
      }).toPromise();

      if (data.result.length > 0) {
        throw new Error('There are reviews in this article!')
      } else {
        return this.articleRepository.delete({ articleID: id }).then(repsonse => {
          if (repsonse) {
            return new ServiceResult({
              returnMessage: ReturnMessage.Success,
              serviceType: 'Article',
              result: true,
            })
          } else {
            return new ServiceResult({
              returnMessage: ReturnMessage.Warning,
              serviceType: 'Article',
              result: false,
            })
          }
        })
      }
    } catch (error) {
      return Promise.resolve(new ServiceResult({
        returnMessage: ReturnMessage.Danger,
        serviceType: 'Article',
        result: false,
        error: error.message
      }))
    }
  }

}
