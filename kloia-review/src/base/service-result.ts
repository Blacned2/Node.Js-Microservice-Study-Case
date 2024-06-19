import { ReturnMessage } from "./return-message.enum";

export class ServiceResult<T> {
    result?: T;
    serviceType: string;
    returnMessage: ReturnMessage;
    error?: string;

    constructor(values: ServiceResult<T>) {
        Object.assign(this, values);
    }
}