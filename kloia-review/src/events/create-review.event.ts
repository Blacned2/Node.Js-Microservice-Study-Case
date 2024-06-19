import { Review } from "src/entity/review.entity";

export class CreateReviewEvent {
    constructor(review: Review) { }
}