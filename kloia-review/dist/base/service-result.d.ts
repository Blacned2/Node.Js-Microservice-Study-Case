import { ReturnMessage } from "./return-message.enum";
export declare class ServiceResult<T> {
    result?: T;
    serviceType: string;
    returnMessage: ReturnMessage;
    error?: string;
    constructor(values: ServiceResult<T>);
}
