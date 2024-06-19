import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { SearchArticleRequest } from 'src/dto/search-article-request';
import { Article } from 'src/models/article';
import { ArticleService } from 'src/services/article/article.service';

@Controller('article')
export class ArticleController {

    constructor(private readonly articleService: ArticleService) { }

    @Get()
    getArticles(@Query() searchArticleRequest: SearchArticleRequest) {
        return this.articleService.readAll(searchArticleRequest);
    }

    @Get(':id')
    getArticle(@Param('id') id: number) {
        return this.articleService.readOne(id);
    }

    @Delete(':id')
    deleteArticle(@Param('id') id: number) {
        return this.articleService.delete(id);
    }

    @Post()
    createArticle(@Body() article: Article) {
        return this.articleService.createOrUpdate(article);
    }

}
