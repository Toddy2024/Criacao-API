import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Lista } from '../lista/lista.entity.js';

@Entity('itens')
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeItem: string;

  @Column('decimal')
  quantidade: number;

  @Column('decimal')
  preco: number;

  @Column()
  comentario: string;

  @ManyToOne(() => Lista, (lista) => lista.itens, { onDelete: 'CASCADE' })
  lista: any;
}