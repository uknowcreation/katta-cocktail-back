import { NestExpressApplication } from '@nestjs/platform-express';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import initialise from '../src/initialise';

export async function getInitialisedApp(): Promise<NestExpressApplication> {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app = moduleFixture.createNestApplication<NestExpressApplication>();
  await initialise(app);
  await app.init();

  return app;
}
