import { Observable } from "rxjs";
export interface IBaseService<T> {
    readAll(request: any): Observable<ServiceResult<T[]>>;
    readOne(id: number): Observable<ServiceResult<T>>;
    createOrUpdate(data: T): Observable<ServiceResult<boolean>>;
    delete(id: number): Observable<ServiceResult<boolean>>;
}
export declare class ServiceResult<T> {
    result: T;
    serviceType: string;
    returnMessage: ReturnMessage;
    error?: string;
    constructor(values: ServiceResult<T>);
}
export declare enum ReturnMessage {
    Success = 1,
    Warning = 2,
    Danger = 3
}
