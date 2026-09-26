import { IsString, IsNotEmpty, IsNumber, Min, MinLength, MaxLength } from 'class-validator';

export class CreateItemDto {
  @IsString({ message: 'O nome do item deve ser um texto válido.' })
  @IsNotEmpty({ message: 'O nome do item não pode estar vazio.' })
  @MinLength(2, { message: 'O nome do item deve ter no mínimo 2 caracteres.' })
  @MaxLength(40, { message: 'O nome do item deve ter no máximo 40 caracteres.' })
  nomeItem: string;

  @IsNumber({}, { message: 'A quantidade deve ser um número válido.' })
  @Min(1, { message: 'A quantidade mínima deve ser 1.' })
  quantidade: number;

  @IsNumber({}, { message: 'O preço deve ser um número válido.' })
  @Min(0.01, { message: 'O preço deve ser maior que zero.' })
  preco: number;

  @IsString({ message: 'O comentário deve ser um texto válido.' })
  @IsNotEmpty({ message: 'O comentário não pode estar vazio.' })
  @MinLength(3, { message: 'O comentário deve ter no mínimo 3 caracteres.' })
  @MaxLength(100, { message: 'O comentário deve ter no máximo 100 caracteres.' })
  comentario: string;
}