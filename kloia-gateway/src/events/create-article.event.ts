import { Article } from "src/models/article";

export class CreateArticleEvent {
    constructor(article: Article) {
        this.payload = article;
    }

    payload: Article;
}