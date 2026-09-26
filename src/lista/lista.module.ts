import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lista } from './lista.entity';
import { ListaService } from './lista.service';
import { ListaController } from './lista.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Lista])],
  controllers: [ListaController],
  providers: [ListaService],
})
export class ListaModule {}
