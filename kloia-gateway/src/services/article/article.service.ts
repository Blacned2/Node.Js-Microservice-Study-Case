import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Article } from 'src/models/article';
import { IBaseService, ServiceResult } from '../base-service.interface';
import { Observable, map } from 'rxjs';

@Injectable()
export class ArticleService implements IBaseService<Article> {

    constructor(
        @Inject('ARTICLE') private readonly articleMicroservice: ClientProxy,
    ) { }

    createOrUpdate(data: Article): Observable<ServiceResult<boolean>> {
        return this.articleMicroservice
            .send({ cmd: 'article_created' }, data)
            .pipe(map(result => new ServiceResult<boolean>(result)));
    }

    readAll(request: any): Observable<ServiceResult<Article[]>> {
        return this.articleMicroservice.send({ cmd: 'get_articles' }, request).pipe(map(result => new ServiceResult<Article[]>(result)));
    }
    readOne(id: number): Observable<ServiceResult<Article>> {
        return this.articleMicroservice.send({cmd: 'get_article'}, id).pipe(map(result => new ServiceResult<Article>(result)));
    }
    delete(id: number): Observable<ServiceResult<boolean>> {
        return this.articleMicroservice.send({ cmd: 'delete_article' }, id).pipe(map(result => new ServiceResult<boolean>(result)));
    }
}
