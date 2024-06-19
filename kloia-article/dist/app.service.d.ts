import { Article } from './entity/article.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from './base/service-result';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { SearchArticleRequest } from './dto/search-article-request';
export declare class AppService {
    private readonly articleRepository;
    private readonly httpService;
    private readonly configService;
    constructor(articleRepository: Repository<Article>, httpService: HttpService, configService: ConfigService);
    getHello(): string;
    getArticles(request: SearchArticleRequest): Promise<ServiceResult<Article[]>>;
    getArticle(id: number): Promise<ServiceResult<Article>>;
    createOrUpdate(article: Article): Promise<ServiceResult<boolean>>;
    delete(id: number): Promise<ServiceResult<boolean>>;
}
