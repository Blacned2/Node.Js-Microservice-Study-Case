import { Review } from "./review.entity";
export declare class Article {
    articleID: number;
    title: string;
    author: string;
    articleContent: string;
    publishDate: Date;
    starCount: number;
    reviews: Review[];
}
