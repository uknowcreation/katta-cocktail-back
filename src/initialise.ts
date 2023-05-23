import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestExpressApplication } from '@nestjs/platform-express';

const ALLOWED_ORIGIN = [
  //** local dev */
  'http://localhost:3000',
];

export const CORS_OPTIONS = Object.freeze({
  origin: ALLOWED_ORIGIN,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders:
    'Content-Type, x-requested-with, Accept, Cache-Control, x-xsrf-token',
  credentials: true,
  exposedHeaders: ['X-Total-Count'],
} as CorsOptions);

export default async (app: NestExpressApplication): Promise<void> => {
  app.enableCors(CORS_OPTIONS);
};
