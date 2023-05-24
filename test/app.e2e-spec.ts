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

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
