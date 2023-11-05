import { Module } from '@nestjs/common';
import { MuseumService } from './museum.service';
import { MuseumEntity } from './museum.entity/museum.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [MuseumService],
  imports: [TypeOrmModule.forFeature([MuseumEntity])],
})
export class MuseumModule {}
