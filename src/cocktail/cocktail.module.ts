import { Module } from '@nestjs/common';
import { CocktailService } from './cocktail.service';
import { CocktailController } from './cocktail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cocktail } from './entities/cocktail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cocktail])],
  providers: [CocktailService],
  controllers: [CocktailController],
  exports: [CocktailService],
})
export class CocktailModule {}
