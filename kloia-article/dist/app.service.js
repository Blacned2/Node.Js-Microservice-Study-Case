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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const article_entity_1 = require("./entity/article.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const service_result_1 = require("./base/service-result");
const return_message_enum_1 = require("./base/return-message.enum");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
let AppService = class AppService {
    constructor(articleRepository, httpService, configService) {
        this.articleRepository = articleRepository;
        this.httpService = httpService;
        this.configService = configService;
    }
    getHello() {
        return 'Hello World!';
    }
    getArticles(request) {
        return this.articleRepository.find({
            relations: {
                reviews: true
            }
        }).then(result => {
            return new service_result_1.ServiceResult({
                result: result,
                returnMessage: return_message_enum_1.ReturnMessage.Success,
                serviceType: 'Article',
            });
        }).catch(error => {
            return new service_result_1.ServiceResult({
                returnMessage: return_message_enum_1.ReturnMessage.Danger,
                serviceType: 'Article',
                error: error.message
            });
        });
    }
    getArticle(id) {
        return this.articleRepository.findOneBy({ articleID: id }).then(result => {
            return new service_result_1.ServiceResult({
                result: result,
                returnMessage: return_message_enum_1.ReturnMessage.Success,
                serviceType: 'Article',
            });
        }).catch(error => {
            return new service_result_1.ServiceResult({
                returnMessage: return_message_enum_1.ReturnMessage.Danger,
                serviceType: 'Article',
                error: error.message
            });
        });
    }
    createOrUpdate(article) {
        try {
            return this.articleRepository.findBy({ articleID: article.articleID }).then(result => {
                if (result) {
                    return this.articleRepository.save(article).then(result => {
                        return new service_result_1.ServiceResult({ returnMessage: return_message_enum_1.ReturnMessage.Success, serviceType: 'Article', result: true });
                    });
                }
                else {
                    return this.articleRepository.insert(article).then(result => {
                        return new service_result_1.ServiceResult({ returnMessage: return_message_enum_1.ReturnMessage.Success, serviceType: 'Article', result: true });
                    });
                }
            });
        }
        catch (error) {
            var result = new service_result_1.ServiceResult({ returnMessage: return_message_enum_1.ReturnMessage.Danger, serviceType: 'Article', result: false, error: error.message });
            Promise.resolve(result);
        }
    }
    async delete(id) {
        try {
            const { data } = await this.httpService.get(`${this.configService.get('API_GATEWAY_URL')}/review`, {
                params: {
                    articleID: id
                }
            }).toPromise();
            if (data.result.length > 0) {
                throw new Error('There are reviews in this article!');
            }
            else {
                return this.articleRepository.delete({ articleID: id }).then(repsonse => {
                    if (repsonse) {
                        return new service_result_1.ServiceResult({
                            returnMessage: return_message_enum_1.ReturnMessage.Success,
                            serviceType: 'Article',
                            result: true,
                        });
                    }
                    else {
                        return new service_result_1.ServiceResult({
                            returnMessage: return_message_enum_1.ReturnMessage.Warning,
                            serviceType: 'Article',
                            result: false,
                        });
                    }
                });
            }
        }
        catch (error) {
            return Promise.resolve(new service_result_1.ServiceResult({
                returnMessage: return_message_enum_1.ReturnMessage.Danger,
                serviceType: 'Article',
                result: false,
                error: error.message
            }));
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(article_entity_1.Article)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], AppService);
//# sourceMappingURL=app.service.js.map