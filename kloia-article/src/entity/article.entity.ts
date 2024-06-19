import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Review } from "./review.entity";

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    articleID: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    articleContent: string;

    @Column()
    publishDate: Date;

    @Column()
    starCount: number;

    @OneToMany(() => Review, (review) => review.article)
    reviews: Review[]
}