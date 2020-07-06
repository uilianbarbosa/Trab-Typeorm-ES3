import {MigrationInterface, QueryRunner} from "typeorm";

export class student1593787808310 implements MigrationInterface {
    name = 'student1593787808310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
    }

}
