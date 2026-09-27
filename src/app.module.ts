import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ListaModule } from './lista/lista.module.js';
import { ItemModule } from './item/item.module.js';
import { Lista } from './lista/lista.entity.js';
import { Item } from './item/item.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'database.sqlite',
      entities: [Lista, Item],
      synchronize: true,
    }),
    ListaModule,
    ItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}