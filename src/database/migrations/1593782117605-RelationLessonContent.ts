import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationLessonContent1593782117605 implements MigrationInterface {
    name = 'RelationLessonContent1593782117605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" ADD "klassId" uuid`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_f5e62b727ea052d7ea5c7b1dbe2" FOREIGN KEY ("klassId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_f5e62b727ea052d7ea5c7b1dbe2"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "klassId"`);
    }

}
