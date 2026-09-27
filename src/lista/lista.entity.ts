import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Item } from '../item/item.entity.js';

@Entity('listas')
export class Lista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @OneToMany(() => Item, (item) => item.lista, { cascade: true })
  itens: any[];
}