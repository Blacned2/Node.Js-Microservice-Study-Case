import { Inject, Injectable } from '@nestjs/common';
import { IBaseService, ServiceResult } from '../base-service.interface';
import { Review } from 'src/models/review';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, map } from 'rxjs';

@Injectable()
export class ReviewService implements IBaseService<Review> {

    constructor(
        @Inject('REVIEW') private readonly reviewMicroservice: ClientProxy,
    ) { }

    createOrUpdate(data: Review): Observable<ServiceResult<boolean>> {
        return this.reviewMicroservice
            .send({ cmd: 'review_created' }, data)
            .pipe(map(result => new ServiceResult<boolean>(result)));
    }

    readAll(request:any): Observable<ServiceResult<Review[]>> {
        return this.reviewMicroservice.send({ cmd: 'get_reviews' }, request).pipe(map(result => new ServiceResult<Review[]>(result)));
    }
    readOne(id: number): Observable<ServiceResult<Review>> {
        return this.reviewMicroservice.send({ cmd: 'get_review' }, id).pipe(map(result => new ServiceResult<Review>(result)));
    }
    delete(id: number): Observable<ServiceResult<boolean>> {
        return this.reviewMicroservice.send({ cmd: 'delete_review' }, id).pipe(map(result => new ServiceResult<boolean>(result)));
    }

}
