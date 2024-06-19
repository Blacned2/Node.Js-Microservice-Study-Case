import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReturnMessage } from './base/return-message.enum';
import { ServiceResult } from './base/service-result';
import { Review } from './entity/review.entity';
import { HttpService } from '@nestjs/axios';
import { Article } from './entity/article.entity';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom, map } from 'rxjs';
import { SearchReviewRequest } from './dto/search-review-request';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {

  }

  getHello(): string {
    return 'Hello World!';
  }

  getReviews(request: SearchReviewRequest): Promise<ServiceResult<Review[]>> {
    return this.reviewRepository.find({
      where: {
        articleID: request.articleID,
      },
      relations: {
        article: true
      }
    }).then(result => {
      return new ServiceResult({
        result: result,
        returnMessage: ReturnMessage.Success,
        serviceType: 'Review',
      });
    }).catch(error => {
      return new ServiceResult({
        returnMessage: ReturnMessage.Danger,
        serviceType: 'Review',
        error: error.message
      });
    })
  }

  getReview(id: number): Promise<ServiceResult<Review>> {
    return this.reviewRepository.findOneBy({ reviewID: id }).then(result => {
      return new ServiceResult({
        result: result,
        returnMessage: ReturnMessage.Success,
        serviceType: 'Review',
      });
    }).catch(error => {
      return new ServiceResult({
        returnMessage: ReturnMessage.Danger,
        serviceType: 'Review',
        error: error.message
      });
    })
  }

  async createOrUpdate(review: Review): Promise<ServiceResult<boolean>> {

    try {

      const { data } = await this.httpService.get<any>(`${this.configService.get('API_GATEWAY_URL')}/article/${review.articleID}`).toPromise();

      if (data.result != null) {
        return this.reviewRepository.findBy({ reviewID: review.reviewID }).then(result => {
          if (result) {
            return this.reviewRepository.save(review).then(result => {
              return new ServiceResult({ returnMessage: ReturnMessage.Success, serviceType: 'Review', result: true });
            })
          } else {
            return this.reviewRepository.insert(review).then(result => {
              return new ServiceResult({ returnMessage: ReturnMessage.Success, serviceType: 'Review', result: true });
            })
          }
        })
      }else{
        throw new Error('Article not found!')
      }

    } catch (error) {
      var result = new ServiceResult({ returnMessage: ReturnMessage.Danger, serviceType: 'Review', result: false, error: error.message });
      return Promise.resolve(result);
    }
  }

  delete(id: number): Promise<ServiceResult<boolean>> {
    try {
      return this.reviewRepository.delete({ reviewID: id }).then(repsonse => {
        if (repsonse) {
          return new ServiceResult({
            returnMessage: ReturnMessage.Success,
            serviceType: 'Review',
            result: true,
          })
        } else {
          return new ServiceResult({
            returnMessage: ReturnMessage.Warning,
            serviceType: 'Review',
            result: false,
          })
        }
      })
    } catch (error) {
      return Promise.resolve(new ServiceResult({
        returnMessage: ReturnMessage.Danger,
        serviceType: 'Review',
        result: false,
        error: error.message
      }))
    }
  }
}
