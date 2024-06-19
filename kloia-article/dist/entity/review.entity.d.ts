import { Article } from "./article.entity";
export declare class Review {
    reviewID: number;
    reviewer: string;
    reviewContent: string;
    articleID: number;
    article: Article;
}
