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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const return_message_enum_1 = require("./base/return-message.enum");
const service_result_1 = require("./base/service-result");
const review_entity_1 = require("./entity/review.entity");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
let AppService = class AppService {
    constructor(reviewRepository, httpService, configService) {
        this.reviewRepository = reviewRepository;
        this.httpService = httpService;
        this.configService = configService;
    }
    getHello() {
        return 'Hello World!';
    }
    getReviews(request) {
        return this.reviewRepository.find({
            where: {
                articleID: request.articleID,
            },
            relations: {
                article: true
            }
        }).then(result => {
            return new service_result_1.ServiceResult({
                result: result,
                returnMessage: return_message_enum_1.ReturnMessage.Success,
                serviceType: 'Review',
            });
        }).catch(error => {
            return new service_result_1.ServiceResult({
                returnMessage: return_message_enum_1.ReturnMessage.Danger,
                serviceType: 'Review',
                error: error.message
            });
        });
    }
    getReview(id) {
        return this.reviewRepository.findOneBy({ reviewID: id }).then(result => {
            return new service_result_1.ServiceResult({
                result: result,
                returnMessage: return_message_enum_1.ReturnMessage.Success,
                serviceType: 'Review',
            });
        }).catch(error => {
            return new service_result_1.ServiceResult({
                returnMessage: return_message_enum_1.ReturnMessage.Danger,
                serviceType: 'Review',
                error: error.message
            });
        });
    }
    async createOrUpdate(review) {
        try {
            const { data } = await this.httpService.get(`${this.configService.get('API_GATEWAY_URL')}/article/${review.articleID}`).toPromise();
            if (data.result != null) {
                return this.reviewRepository.findBy({ reviewID: review.reviewID }).then(result => {
                    if (result) {
                        return this.reviewRepository.save(review).then(result => {
                            return new service_result_1.ServiceResult({ returnMessage: return_message_enum_1.ReturnMessage.Success, serviceType: 'Review', result: true });
                        });
                    }
                    else {
                        return this.reviewRepository.insert(review).then(result => {
                            return new service_result_1.ServiceResult({ returnMessage: return_message_enum_1.ReturnMessage.Success, serviceType: 'Review', result: true });
                        });
                    }
                });
            }
            else {
                throw new Error('Article not found!');
            }
        }
        catch (error) {
            var result = new service_result_1.ServiceResult({ returnMessage: return_message_enum_1.ReturnMessage.Danger, serviceType: 'Review', result: false, error: error.message });
            return Promise.resolve(result);
        }
    }
    delete(id) {
        try {
            return this.reviewRepository.delete({ reviewID: id }).then(repsonse => {
                if (repsonse) {
                    return new service_result_1.ServiceResult({
                        returnMessage: return_message_enum_1.ReturnMessage.Success,
                        serviceType: 'Review',
                        result: true,
                    });
                }
                else {
                    return new service_result_1.ServiceResult({
                        returnMessage: return_message_enum_1.ReturnMessage.Warning,
                        serviceType: 'Review',
                        result: false,
                    });
                }
            });
        }
        catch (error) {
            return Promise.resolve(new service_result_1.ServiceResult({
                returnMessage: return_message_enum_1.ReturnMessage.Danger,
                serviceType: 'Review',
                result: false,
                error: error.message
            }));
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], AppService);
//# sourceMappingURL=app.service.js.map