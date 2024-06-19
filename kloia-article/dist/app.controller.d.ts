import { AppService } from './app.service';
import { Article } from './entity/article.entity';
import { SearchArticleRequest } from './dto/search-article-request';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    handleArticleCreated(data: Article): Promise<import("./base/service-result").ServiceResult<boolean>>;
    getArticle(id: number): Promise<import("./base/service-result").ServiceResult<Article>>;
    getArticles(request: SearchArticleRequest): Promise<import("./base/service-result").ServiceResult<Article[]>>;
    deleteArticle(id: number): Promise<import("./base/service-result").ServiceResult<boolean>>;
}
