import { Repository } from 'typeorm';
import { ServiceResult } from './base/service-result';
import { Review } from './entity/review.entity';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { SearchReviewRequest } from './dto/search-review-request';
export declare class AppService {
    private readonly reviewRepository;
    private readonly httpService;
    private readonly configService;
    constructor(reviewRepository: Repository<Review>, httpService: HttpService, configService: ConfigService);
    getHello(): string;
    getReviews(request: SearchReviewRequest): Promise<ServiceResult<Review[]>>;
    getReview(id: number): Promise<ServiceResult<Review>>;
    createOrUpdate(review: Review): Promise<ServiceResult<boolean>>;
    delete(id: number): Promise<ServiceResult<boolean>>;
}
