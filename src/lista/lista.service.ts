import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lista } from './lista.entity.js';
import { CreateListaDto } from './lista.dto.js';

@Injectable()
export class ListaService {
  constructor(
    @InjectRepository(Lista)
    private listaRepository: Repository<Lista>,
  ) {}

  findAll(): Promise<Lista[]> {
    return this.listaRepository.find({ relations: { itens: true } });
  }

  async findOne(id: number): Promise<Lista> {
    const lista = await this.listaRepository.findOne({ where: { id }, relations: { itens: true } });
    if (!lista) {
      throw new NotFoundException(`Lista com ID ${id} não encontrada.`);
    }
    return lista;
  }

  create(createListaDto: CreateListaDto): Promise<Lista> {
    const novaLista = this.listaRepository.create(createListaDto);
    return this.listaRepository.save(novaLista);
  }

  async remove(id: number): Promise<void> {
    const lista = await this.findOne(id);
    await this.listaRepository.remove(lista);
  }
}