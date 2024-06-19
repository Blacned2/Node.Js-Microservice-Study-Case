import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Review } from './entity/review.entity';
import { SearchReviewRequest } from './dto/search-review-request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'review_created' })
  handleReviewCreated(data: Review) {
    return this.appService.createOrUpdate(data);
  }

  @MessagePattern({ cmd: 'get_review' })
  getReview(id: number) {
    return this.appService.getReview(id);
  }

  @MessagePattern({ cmd: 'get_reviews' })
  getReviews(request:SearchReviewRequest) {
    return this.appService.getReviews(request);
  }

  @MessagePattern({ cmd: 'delete_review' })
  deleteReview(id: number) {
    return this.appService.delete(id);
  }

}
