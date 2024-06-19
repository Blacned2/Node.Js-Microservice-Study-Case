import { Article } from "src/models/article";
export declare class CreateArticleEvent {
    constructor(article: Article);
    payload: Article;
}
