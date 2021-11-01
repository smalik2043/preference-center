import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as typeOrmConfig from './typeorm.config';
import { User } from './user/entity/user.entity';
import { Consent } from './consent/entity/consent.entity';
import { ConsentModule } from './consent/consent.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([User, Consent]),
    UserModule, ConsentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
