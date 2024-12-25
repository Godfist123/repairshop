import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1735107837109 implements MigrationInterface {
    name = 'InitMigration1735107837109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tickets" ("tickets_id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "completed" boolean NOT NULL DEFAULT false, "tech" character varying NOT NULL DEFAULT 'unassigned', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "customerCustomersId" integer, CONSTRAINT "PK_07c837e9fb23220069753c84d81" PRIMARY KEY ("tickets_id"))`);
        await queryRunner.query(`CREATE TABLE "customers" ("customers_id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "address1" character varying NOT NULL, "address2" character varying, "city" character varying NOT NULL, "state" character varying(2) NOT NULL, "postcode" character varying(5) NOT NULL, "notes" character varying, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_1f76724f85fc0246661e390b071" PRIMARY KEY ("customers_id"))`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_ce9a7765c0e5d2e074a4cc84db3" FOREIGN KEY ("customerCustomersId") REFERENCES "customers"("customers_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_ce9a7765c0e5d2e074a4cc84db3"`);
        await queryRunner.query(`DROP TABLE "customers"`);
        await queryRunner.query(`DROP TABLE "tickets"`);
    }

}
