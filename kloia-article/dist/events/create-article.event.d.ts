import { Article } from "src/entity/article.entity";
export declare class CreateArticleEvent {
    constructor(article: Article);
    payload: Article;
}
