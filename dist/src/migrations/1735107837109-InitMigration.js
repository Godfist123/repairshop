"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitMigration1735107837109 = void 0;
class InitMigration1735107837109 {
    constructor() {
        this.name = 'InitMigration1735107837109';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "tickets" ("tickets_id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "completed" boolean NOT NULL DEFAULT false, "tech" character varying NOT NULL DEFAULT 'unassigned', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "customerCustomersId" integer, CONSTRAINT "PK_07c837e9fb23220069753c84d81" PRIMARY KEY ("tickets_id"))`);
            yield queryRunner.query(`CREATE TABLE "customers" ("customers_id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "address1" character varying NOT NULL, "address2" character varying, "city" character varying NOT NULL, "state" character varying(2) NOT NULL, "postcode" character varying(5) NOT NULL, "notes" character varying, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_1f76724f85fc0246661e390b071" PRIMARY KEY ("customers_id"))`);
            yield queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_ce9a7765c0e5d2e074a4cc84db3" FOREIGN KEY ("customerCustomersId") REFERENCES "customers"("customers_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_ce9a7765c0e5d2e074a4cc84db3"`);
            yield queryRunner.query(`DROP TABLE "customers"`);
            yield queryRunner.query(`DROP TABLE "tickets"`);
        });
    }
}
exports.InitMigration1735107837109 = InitMigration1735107837109;
