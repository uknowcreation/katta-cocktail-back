import { Cocktail } from '../../../src/cocktail/entities/cocktail.entity';
import { DeepPartial } from 'typeorm';

export const cocktails: DeepPartial<Cocktail>[] = [
  {
    name: 'Mojito',
    description:
      "Le Mojito est un cocktail à base de rhum, de citron vert, de sucre de canne, de menthe et d'eau gazeuse.",
  },
  {
    name: 'Margarita',
    description:
      'La Margarita est un cocktail à base de tequila, de citron vert et de triple sec.',
  },
  {
    name: 'Last Word',
    description:
      'Le Last Word est un cocktail à base de gin, de Chartreuse verte, de jus de citron vert et de marasquin.',
  },
];
