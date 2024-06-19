import { Article } from "src/entity/article.entity";

export class CreateArticleEvent {
    constructor(article: Article) {
        this.payload = article;
    }

    payload: Article;

}