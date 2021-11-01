import {MigrationInterface, QueryRunner} from "typeorm";

export class test1635695901977 implements MigrationInterface {
    name = 'test1635695901977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "consents" ("id" uuid NOT NULL, "consentId" character varying NOT NULL, "enabled" boolean NOT NULL, "status" character NOT NULL, "userId" uuid, CONSTRAINT "PK_9efc68eb6aba7d638fb6ea034dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "consents" ADD CONSTRAINT "FK_7736e32000c01e8e189d1d4a0dd" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consents" DROP CONSTRAINT "FK_7736e32000c01e8e189d1d4a0dd"`);
        await queryRunner.query(`DROP TABLE "consents"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
