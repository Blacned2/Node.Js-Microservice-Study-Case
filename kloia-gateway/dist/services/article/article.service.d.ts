import { ClientProxy } from '@nestjs/microservices';
import { Article } from 'src/models/article';
import { IBaseService, ServiceResult } from '../base-service.interface';
import { Observable } from 'rxjs';
export declare class ArticleService implements IBaseService<Article> {
    private readonly articleMicroservice;
    constructor(articleMicroservice: ClientProxy);
    createOrUpdate(data: Article): Observable<ServiceResult<boolean>>;
    readAll(request: any): Observable<ServiceResult<Article[]>>;
    readOne(id: number): Observable<ServiceResult<Article>>;
    delete(id: number): Observable<ServiceResult<boolean>>;
}
