import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateItemDto } from './create-item.dto.js'; // <- Note o .js no final

@Controller('items')
export class AppController {
  private items: CreateItemDto[] = [];

  @Get()
  findAll() {
    return this.items;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    this.items.push(createItemDto);
    return {
      message: 'Item criado com sucesso!',
      data: createItemDto,
    };
  }
}