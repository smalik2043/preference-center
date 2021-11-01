import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ConsentDto } from "./dto/consent.dto";
import { ConsentService } from "./service/consent.service";


@ApiTags('Consent')
@Controller('consent')
export class ConsentController {
    constructor(
        private consentService: ConsentService
    ) {}

    @Post()
    createUser(
        @Body() consentDto: ConsentDto,
    ): Promise<void> {
        return this.consentService.save(consentDto);
    }
}