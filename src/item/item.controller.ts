import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ItemService } from './item.service.js';
import { CreateItemDto } from './item.dto.js';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('itens')
@Controller('itens')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os itens' })
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um item específico pelo ID' })
  findOne(@Param('id') id: string) {
    return this.itemService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um novo item' })
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um item pelo ID' })
  remove(@Param('id') id: string) {
    return this.itemService.remove(+id);
  }
}