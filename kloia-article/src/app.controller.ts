import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Article } from './entity/article.entity';
import { SearchArticleRequest } from './dto/search-article-request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd:'article_created' })
  handleArticleCreated(data: Article) {
    return this.appService.createOrUpdate(data);
  }

  @MessagePattern({ cmd: 'get_article' })
  getArticle(id: number) {
    return this.appService.getArticle(id);
  }

  @MessagePattern({ cmd: 'get_articles'})
  getArticles(request: SearchArticleRequest) {
    return this.appService.getArticles(request);
  }

  @MessagePattern({ cmd: 'delete_article' })
  deleteArticle(id: number) {
    return this.appService.delete(id);
  }
}
