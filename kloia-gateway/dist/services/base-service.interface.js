"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnMessage = exports.ServiceResult = void 0;
class ServiceResult {
    constructor(values) {
        Object.assign(this, values);
    }
}
exports.ServiceResult = ServiceResult;
var ReturnMessage;
(function (ReturnMessage) {
    ReturnMessage[ReturnMessage["Success"] = 1] = "Success";
    ReturnMessage[ReturnMessage["Warning"] = 2] = "Warning";
    ReturnMessage[ReturnMessage["Danger"] = 3] = "Danger";
})(ReturnMessage || (exports.ReturnMessage = ReturnMessage = {}));
//# sourceMappingURL=base-service.interface.js.map