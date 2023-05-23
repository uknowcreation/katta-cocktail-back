import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import initialise from './initialise';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await initialise(app);
  await app.listen(3300);
}
bootstrap();
