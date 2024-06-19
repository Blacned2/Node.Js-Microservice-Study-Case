import { Review } from "./review";

export class Article {

    constructor(values: Article) {
        Object.assign(this, values);
    }

    articleID?:number;
    title:string;
    author:string;
    articleContent: string;
    publishDate: Date;
    starCount: number;
    reviews: Review[] = [];
}