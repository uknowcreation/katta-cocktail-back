import { Controller, Get } from '@nestjs/common';
import { CocktailService } from './cocktail.service';
import { TCocktail } from './cocktail';

@Controller('cocktail')
export class CocktailController {
  constructor(private readonly cocktailService: CocktailService) {}

  @Get('all')
  async getChatRooms(): Promise<TCocktail[]> {
    return this.cocktailService.getAllCocktail();
  }
}
