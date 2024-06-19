import { AppService } from './app.service';
import { Review } from './entity/review.entity';
import { SearchReviewRequest } from './dto/search-review-request';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    handleReviewCreated(data: Review): Promise<import("./base/service-result").ServiceResult<boolean>>;
    getReview(id: number): Promise<import("./base/service-result").ServiceResult<Review>>;
    getReviews(request: SearchReviewRequest): Promise<import("./base/service-result").ServiceResult<Review[]>>;
    deleteReview(id: number): Promise<import("./base/service-result").ServiceResult<boolean>>;
}
