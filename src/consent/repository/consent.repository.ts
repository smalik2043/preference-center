import { EntityRepository, Repository } from "typeorm";
import { Consent } from "../entity/consent.entity";


@EntityRepository(Consent)
export class ConsentRepository extends Repository<Consent>{

}