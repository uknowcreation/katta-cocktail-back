import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cocktail } from './entities/cocktail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TCocktail } from './cocktail';

@Injectable()
export class CocktailService {
  constructor(
    @InjectRepository(Cocktail)
    private readonly cocktailRepository: Repository<Cocktail>,
  ) {}

  async getAllCocktail(): Promise<TCocktail[]> {
    return this.cocktailRepository.find();
  }
}
