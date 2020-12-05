import { MigrationInterface, QueryRunner } from 'typeorm';

export default class PopulateCategorySize1607127012676
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO categories (name) VALUES ('Feminino')",
    );
    await queryRunner.query(
      "INSERT INTO categories (name) VALUES ('Vestidos')",
    );

    await queryRunner.query("INSERT INTO sizes (name) VALUES ('G')");
    await queryRunner.query("INSERT INTO sizes (name) VALUES ('M')");
    await queryRunner.query("INSERT INTO sizes (name) VALUES ('P')");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DELETE FROM categories WHERE name = 'Feminino'");
    await queryRunner.query("DELETE FROM categories WHERE name = 'Vestidos'");

    await queryRunner.query("DELETE FROM sizes WHERE name = 'G'");
    await queryRunner.query("DELETE FROM sizes WHERE name = 'M'");
    await queryRunner.query("DELETE FROM sizes WHERE name = 'P'");
  }
}
