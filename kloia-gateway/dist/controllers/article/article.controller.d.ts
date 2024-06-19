import { SearchArticleRequest } from 'src/dto/search-article-request';
import { Article } from 'src/models/article';
import { ArticleService } from 'src/services/article/article.service';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    getArticles(searchArticleRequest: SearchArticleRequest): Observable<import("../../services/base-service.interface").ServiceResult<Article[]>>;
    getArticle(id: number): Observable<import("../../services/base-service.interface").ServiceResult<Article>>;
    deleteArticle(id: number): Observable<import("../../services/base-service.interface").ServiceResult<boolean>>;
    createArticle(article: Article): Observable<import("../../services/base-service.interface").ServiceResult<boolean>>;
}
