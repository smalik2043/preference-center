import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ConsentRepository } from "../repository/consent.repository";
import { v4 as uuidv4 } from 'uuid';
import { ConsentDto } from "../dto/consent.dto";
import { Consent } from "../entity/consent.entity";
import { User } from "src/user/entity/user.entity";
import { UserService } from "src/user/service/user.service";
import { StatusEnum } from "../interface/interface";

@Injectable()
export class ConsentService {
    constructor(
        @InjectRepository(ConsentRepository)
        private consentRepository: ConsentRepository,
        private userService: UserService
    ) {}

    async save(consentDTO: ConsentDto): Promise<void> {
        try {
            const user: User = await this.userService.getById(consentDTO.userId);
            let consent: Consent = null;

            await Promise.all(consentDTO.consents.map(async c => {
                const oldConsent = await this.consentRepository.find({where: {consentId: c.id, status: 'N'}})
                await Promise.all(oldConsent.map(async oc => {
                    oc.status = StatusEnum.OLD;
                    await this.consentRepository.save(oc);
                }))
                consent = new Consent();
                consent.id = uuidv4();
                consent.consentId = c.id;
                consent.enabled = c.enabled;
                consent.user = user;
                consent.status = StatusEnum.NEW;
                await this.consentRepository.save(consent);
            }))
        } catch(e) {
            console.log(e)
        }
        
    }
}