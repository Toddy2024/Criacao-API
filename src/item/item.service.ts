import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { CreateItemDto } from './item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  findAll(): Promise<Item[]> {
    return this.itemRepository.find({ relations: ['lista'] });
  }

  async findOne(id: number): Promise<Item> {
    const item = await this.itemRepository.findOne({ where: { id }, relations: ['lista'] });
    if (!item) {
      throw new NotFoundException(`Item com ID ${id} não encontrado.`);
    }
    return item;
  }

  create(createItemDto: CreateItemDto): Promise<Item> {
    const novoItem = this.itemRepository.create(createItemDto);
    return this.itemRepository.save(novoItem);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.itemRepository.remove(item);
  }
}