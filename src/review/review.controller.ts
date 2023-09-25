import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {

  @Get('get/:productId')
  async getByProduct(@Param('productId') productId: string) {

  }

  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {}

  @Delete('byProduct/:productId')
  async delete(@Param('productId') productId: string) {}
}