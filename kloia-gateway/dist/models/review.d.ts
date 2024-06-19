import { Article } from "./article";
export declare class Review {
    reviewID?: number;
    articleID: number;
    reviewer: string;
    reviewContent: string;
    article: Article;
}
