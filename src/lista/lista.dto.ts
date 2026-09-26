import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateListaDto {
  @IsString({ message: 'O nome da lista deve ser um texto válido.' })
  @IsNotEmpty({ message: 'O nome da lista não pode estar vazio.' })
  @MinLength(3, { message: 'O nome da lista deve ter no mínimo 3 caracteres.' })
  @MaxLength(50, { message: 'O nome da lista deve ter no máximo 50 caracteres.' })
  nome: string;

  @IsString({ message: 'A descrição deve ser um texto válido.' })
  @IsNotEmpty({ message: 'A descrição não pode estar vazia.' })
  @MinLength(5, { message: 'A descrição deve ter no mínimo 5 caracteres.' })
  @MaxLength(100, { message: 'A descrição deve ter no máximo 100 caracteres.' })
  descricao: string;
}