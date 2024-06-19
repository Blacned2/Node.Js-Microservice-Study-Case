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
const article_entity_1 = require("./entity/article.entity");
const search_article_request_1 = require("./dto/search-article-request");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    handleArticleCreated(data) {
        return this.appService.createOrUpdate(data);
    }
    getArticle(id) {
        return this.appService.getArticle(id);
    }
    getArticles(request) {
        return this.appService.getArticles(request);
    }
    deleteArticle(id) {
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
    (0, microservices_1.MessagePattern)({ cmd: 'article_created' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_entity_1.Article]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "handleArticleCreated", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_article' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getArticle", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_articles' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_article_request_1.SearchArticleRequest]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getArticles", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_article' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteArticle", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map