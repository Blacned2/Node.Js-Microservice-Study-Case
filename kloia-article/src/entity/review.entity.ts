import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Article } from "./article.entity";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    reviewID: number;

    @Column()
    reviewer: string;

    @Column()
    reviewContent: string;

    @Column()
    articleID: number;

    @ManyToOne(() => Article, (article) => article.reviews)
    @JoinColumn({ name: 'articleID' })
    article: Article;
}