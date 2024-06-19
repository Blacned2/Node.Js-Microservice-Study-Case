import { SearchReviewRequest } from 'src/dto/search-review-request';
import { Review } from 'src/models/review';
import { ReviewService } from 'src/services/review/review.service';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    getArticles(reviewSearchRequest: SearchReviewRequest): Observable<import("../../services/base-service.interface").ServiceResult<Review[]>>;
    getArticle(id: number): Observable<import("../../services/base-service.interface").ServiceResult<Review>>;
    deleteArticle(id: number): Observable<import("../../services/base-service.interface").ServiceResult<boolean>>;
    createArticle(review: Review): Observable<import("../../services/base-service.interface").ServiceResult<boolean>>;
}
