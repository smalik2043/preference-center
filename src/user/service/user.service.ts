import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDto } from "../dto/user.dto";
import { UserRepository } from "../repository/user.repository";
import { v4 as uuidv4 } from 'uuid';
import { User } from "../entity/user.entity";
import { ConsentInterface, UserConsent } from "src/consent/interface/interface";
import { StatusEnum } from "../interface/interface";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}

    async createUser(userDto: UserDto): Promise<User> {
        userDto.id = uuidv4();
        const isEmailExist = await this.getUserByEmail(userDto.email);
        console.log('isEmailExist', isEmailExist)
        if (isEmailExist) {
            throw new UnprocessableEntityException('Email already taken');
        }
        const user = await this.userRepository.createUser(userDto);
        return user;
    }

    async getUserByEmail(email: string): Promise<boolean> {
        const user: User = await this.userRepository.findOne({where: {email}});
        if (user) {
            return true;
        }
        return false;
    }

    async getById(id: string): Promise<User> {
        const user: User = await this.userRepository.findOne(id);
        console.log('user', user);
        return user;
    }

    async getUserConsent(id: string): Promise<UserConsent | {}> {
        const user: User[] = await this.userRepository.find({where: {id}});
        const consents: ConsentInterface[] = []
        if (user) {
            const id = user[0].id;
            user.map(u => {
                u.consent.map(c => {
                    if (c.status === StatusEnum.NEW) {
                        consents.push({
                            id: c.consentId,
                            enabled: c.enabled
                        });
                    }
                })
            })
    
            const userConsent: UserConsent = {
                user: {
                    id
                },
                consents,
            }

            return userConsent;
        }
        return {}
    }
}