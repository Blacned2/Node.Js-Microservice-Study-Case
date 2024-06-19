import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { SearchReviewRequest } from 'src/dto/search-review-request';
import { Review } from 'src/models/review';
import { ReviewService } from 'src/services/review/review.service';

@Controller('review')
export class ReviewController {

    constructor(private readonly reviewService: ReviewService) { }

    @Get()
    getArticles(@Query() reviewSearchRequest: SearchReviewRequest) {
        return this.reviewService.readAll(reviewSearchRequest);
    }

    @Get(':id')
    getArticle(@Param('id') id: number) {
        return this.reviewService.readOne(id);
    }

    @Delete(':id')
    deleteArticle(@Param('id') id: number) {
        return this.reviewService.delete(id);
    }

    @Post()
    createArticle(@Body() review: Review) {
        return this.reviewService.createOrUpdate(review);
    }

}
