import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocktailModule } from './cocktail/cocktail.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const { env } = process;
const isTestEnv = env.NODE_ENV === 'test';

const typeOrmModuleOptions: TypeOrmModuleOptions = {
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
  migrations: ['./migration/*.ts'],
  extra: {
    decimalNumbers: true,
  },
  timezone: 'Z',
  logging: false,
  autoLoadEntities: true,
  retryAttempts: 0,
};

@Module({
  imports: [
    CocktailModule,
    UserModule,
    TypeOrmModule.forRoot(typeOrmModuleOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
