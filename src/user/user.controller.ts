import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserConsent } from "src/consent/interface/interface";
import { UserDto } from "./dto/user.dto";
import { User } from "./entity/user.entity";
import { UserService } from "./service/user.service";

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Post()
    createUser(@Body() userDto: UserDto): Promise<User> {
        return this.userService.createUser(userDto)
    }

    @Get('/:id')
    get(@Param('id') id: string): Promise<UserConsent | {}> {
        return this.userService.getUserConsent(id)
    }
}