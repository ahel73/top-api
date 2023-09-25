import { Body, Controller, Delete, Get, Param, Post, Patch, HttpCode } from '@nestjs/common';
import { FindTopPageResponse } from './dto/find-top-page.response';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
  @Get(':id')
  async get(@Param('id') id: string) {}

  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}
  
  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageModel) {}

  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindTopPageResponse) {}
}