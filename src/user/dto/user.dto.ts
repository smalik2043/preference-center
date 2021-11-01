import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UserDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    id: string

    @ApiProperty()
    @IsString()
    email: string

    @ApiProperty()
    @IsOptional()
    consents: []
}