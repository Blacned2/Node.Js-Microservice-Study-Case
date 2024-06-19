import { Review } from "./review";
export declare class Article {
    constructor(values: Article);
    articleID?: number;
    title: string;
    author: string;
    articleContent: string;
    publishDate: Date;
    starCount: number;
    reviews: Review[];
}
