import {MigrationInterface, QueryRunner} from "typeorm";

export class test1635767426947 implements MigrationInterface {
    name = 'test1635767426947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consents" ADD "createdDate" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consents" DROP COLUMN "createdDate"`);
    }

}
