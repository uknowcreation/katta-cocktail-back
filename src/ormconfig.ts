import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

const { env } = process;
const isTestEnv = env.NODE_ENV === 'test';

const options: DataSourceOptions = {
  type: 'mariadb',
  host: env.DB_HOST,
  port: parseInt(env.DB_PORT ?? '3306'),
  username: env.DB_USER,
  password: env.DB_PASS,
  database: isTestEnv ? 'test' : env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  subscribers: ['./subscribers/*.ts'],
  synchronize: false,
  charset: 'utf8mb4',
  migrationsRun: true,
  migrations: ['dist/migration/*.js'],
  extra: {
    decimalNumbers: true,
  },
  timezone: 'Z',
  cache: false,
  logging: false,
};

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  ...options,
  autoLoadEntities: true,
  retryAttempts: 0,
};

export const connectionSource = new DataSource(options);
