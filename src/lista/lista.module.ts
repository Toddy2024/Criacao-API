import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lista } from './lista.entity.js';
import { ListaService } from './lista.service.js';
import { ListaController } from './lista.controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([Lista])],
  controllers: [ListaController],
  providers: [ListaService],
})
export class ListaModule {}
