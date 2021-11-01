import { EntityRepository, Repository } from "typeorm";
import { UserDto } from "../dto/user.dto";
import { User } from "../entity/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async createUser(userDto: UserDto): Promise<User> {
        const { id, email } = userDto;
        const user = new User();
        user.id = id;
        user.email = email;
        user.consent = [];

        return user.save();
    }
}