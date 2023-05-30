import * as request from 'supertest';
import { JEST_TIMEOUT_DELAY } from './setup';
import { getInitialisedApp } from './initialise';
import { NestExpressApplication } from '@nestjs/platform-express';

describe('AppController (e2e)', () => {
  let app: NestExpressApplication;

  beforeAll(async () => {
    app = await getInitialisedApp();
  }, JEST_TIMEOUT_DELAY);

  afterAll(async () => {
    await app.close();
  }, JEST_TIMEOUT_DELAY);

  describe('/cocktail', () => {
    it('/all (GET)', async () => {
      const { body } = await request(app.getHttpServer())
        .get('/cocktail/all')
        .expect(200);

      expect(body).toEqual([
        {
          id: 1,
          name: 'Mojito',
          description:
            'Le Mojito est un cocktail à base de rhum, de citron vert, de sucre de canne, de menthe et d eau gazeuse',
        },
        {
          id: 2,
          name: 'Margarita',
          description:
            'La Margarita est un cocktail à base de tequila, de citron vert et de triple sec',
        },
        {
          id: 3,
          name: 'Last Word',
          description:
            'Le Last Word est un cocktail à base de gin, de Chartreuse verte, de jus de citron vert et de marasquin',
        },
      ]);
    });
  });
});
