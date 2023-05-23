import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocktailModule } from './cocktail/cocktail.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CocktailModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
