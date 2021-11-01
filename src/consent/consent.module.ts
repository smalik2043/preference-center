import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { ConsentController } from './consent.controller';
import { ConsentRepository } from './repository/consent.repository';
import { ConsentService } from './service/consent.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ConsentRepository]),
        UserModule
    ],
    controllers: [ConsentController],
    providers: [ConsentService]
})
export class ConsentModule {}
