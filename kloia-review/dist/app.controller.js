"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const microservices_1 = require("@nestjs/microservices");
const review_entity_1 = require("./entity/review.entity");
const search_review_request_1 = require("./dto/search-review-request");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    handleReviewCreated(data) {
        return this.appService.createOrUpdate(data);
    }
    getReview(id) {
        return this.appService.getReview(id);
    }
    getReviews(request) {
        return this.appService.getReviews(request);
    }
    deleteReview(id) {
        return this.appService.delete(id);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'review_created' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_entity_1.Review]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "handleReviewCreated", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_review' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getReview", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_reviews' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_review_request_1.SearchReviewRequest]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getReviews", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_review' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteReview", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map