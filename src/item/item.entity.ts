import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Lista } from '../lista/lista.entity';

@Entity('itens')
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeItem: string; // Validação de string

  @Column('decimal')
  quantidade: number; // Validação de número

  @Column('decimal')
  preco: number; // Validação de número

  @Column()
  comentario: string; // Comentário exigido (ex: com o seu nome)

  @ManyToOne(() => Lista, (lista) => lista.itens, { onDelete: 'CASCADE' })
  lista: Lista;
}