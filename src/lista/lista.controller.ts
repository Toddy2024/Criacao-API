import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ListaService } from './lista.service';
import { CreateListaDto } from './lista.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('listas')
@Controller('listas')
export class ListaController {
  constructor(private readonly listaService: ListaService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas as listas de compras' })
  findAll() {
    return this.listaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma lista específica pelo ID' })
  findOne(@Param('id') id: string) {
    return this.listaService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar uma nova lista de compras' })
  create(@Body() createListaDto: CreateListaDto) {
    return this.listaService.create(createListaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma lista pelo ID' })
  remove(@Param('id') id: string) {
    return this.listaService.remove(+id);
  }
}