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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const base_service_interface_1 = require("../base-service.interface");
const rxjs_1 = require("rxjs");
let ArticleService = class ArticleService {
    constructor(articleMicroservice) {
        this.articleMicroservice = articleMicroservice;
    }
    createOrUpdate(data) {
        return this.articleMicroservice
            .send({ cmd: 'article_created' }, data)
            .pipe((0, rxjs_1.map)(result => new base_service_interface_1.ServiceResult(result)));
    }
    readAll(request) {
        return this.articleMicroservice.send({ cmd: 'get_articles' }, request).pipe((0, rxjs_1.map)(result => new base_service_interface_1.ServiceResult(result)));
    }
    readOne(id) {
        return this.articleMicroservice.send({ cmd: 'get_article' }, id).pipe((0, rxjs_1.map)(result => new base_service_interface_1.ServiceResult(result)));
    }
    delete(id) {
        return this.articleMicroservice.send({ cmd: 'delete_article' }, id).pipe((0, rxjs_1.map)(result => new base_service_interface_1.ServiceResult(result)));
    }
};
exports.ArticleService = ArticleService;
exports.ArticleService = ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ARTICLE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], ArticleService);
//# sourceMappingURL=article.service.js.map