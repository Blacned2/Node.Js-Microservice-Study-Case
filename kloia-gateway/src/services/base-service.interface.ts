import { Observable } from "rxjs";

export interface IBaseService<T> {
    readAll(request:any): Observable<ServiceResult<T[]>>;
    readOne(id:number): Observable<ServiceResult<T>>;
    createOrUpdate(data: T): Observable<ServiceResult<boolean>>;
    delete(id:number): Observable<ServiceResult<boolean>>;
}

export class ServiceResult<T> {
    result: T;
    serviceType:string;
    returnMessage: ReturnMessage;
    error?: string;

    constructor(values: ServiceResult<T>) {
        Object.assign(this, values);
    }
}

export enum ReturnMessage {
    Success = 1, //Start with 1
    Warning,
    Danger,
}
