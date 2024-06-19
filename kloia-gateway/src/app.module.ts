import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ReviewController } from './controllers/review/review.controller';
import { ArticleController } from './controllers/article/article.controller';
import { ReviewService } from './services/review/review.service';
import { ArticleService } from './services/article/article.service';
import * as dotenv from 'dotenv';

// Ortam değişkenlerini yükle
dotenv.config();

@Module({
  imports: [ClientsModule.register([
    {
      name: 'REVIEW',
      transport: Transport.TCP,
      options: {
        host: process.env.API_REVIEW_URL,
        port: 3001,
      }
    },
    {
      name: 'ARTICLE',
      transport: Transport.TCP,
      options: {
        host: process.env.API_ARTICLE_URL,
        port: 3002
      }
    }
  ])],
  controllers: [AppController, ReviewController, ArticleController],
  providers: [AppService, ReviewService, ArticleService],
})
export class AppModule { }
