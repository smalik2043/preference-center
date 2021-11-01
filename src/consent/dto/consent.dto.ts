import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { char } from '../interface/interface';

export class ConsentDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    id: string

    @ApiProperty()
    @IsString()
    consents: [{
        id: string
        enabled: boolean
    }]

    @ApiProperty()
    status: char

    @ApiProperty()
    userId: string

}