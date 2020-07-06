import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RelationClassStudent1593785866865
  implements MigrationInterface {
  name = 'RelationClassStudent1593785866865';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "student_klasses_class" ("studentId" uuid NOT NULL, "classId" uuid NOT NULL, CONSTRAINT "PK_451d0d7be7a2a4dee6ed495bee6" PRIMARY KEY ("studentId", "classId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9d99d97c7c3f9a85b3a5f29adc" ON "student_klasses_class" ("studentId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_af8981697f31da701affe714d4" ON "student_klasses_class" ("classId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "student_klasses_class" ADD CONSTRAINT "FK_9d99d97c7c3f9a85b3a5f29adcf" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "student_klasses_class" ADD CONSTRAINT "FK_af8981697f31da701affe714d42" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "student_klasses_class" DROP CONSTRAINT "FK_af8981697f31da701affe714d42"`,
    );
    await queryRunner.query(
      `ALTER TABLE "student_klasses_class" DROP CONSTRAINT "FK_9d99d97c7c3f9a85b3a5f29adcf"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_af8981697f31da701affe714d4"`);
    await queryRunner.query(`DROP INDEX "IDX_9d99d97c7c3f9a85b3a5f29adc"`);
    await queryRunner.query(`DROP TABLE "student_klasses_class"`);
  }
}
