import { IBaseService, ServiceResult } from '../base-service.interface';
import { Review } from 'src/models/review';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
export declare class ReviewService implements IBaseService<Review> {
    private readonly reviewMicroservice;
    constructor(reviewMicroservice: ClientProxy);
    createOrUpdate(data: Review): Observable<ServiceResult<boolean>>;
    readAll(request: any): Observable<ServiceResult<Review[]>>;
    readOne(id: number): Observable<ServiceResult<Review>>;
    delete(id: number): Observable<ServiceResult<boolean>>;
}
