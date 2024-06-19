import { Article } from "./article";

export class Review {
    reviewID?:number;
    articleID: number;
    reviewer: string;
    reviewContent: string;
    article: Article;
}