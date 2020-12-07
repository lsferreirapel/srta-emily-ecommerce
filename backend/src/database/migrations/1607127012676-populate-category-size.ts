import { MigrationInterface, QueryRunner } from 'typeorm';

export default class PopulateCategorySize1607127012676
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO categories (name) VALUES ('Novidades')",
    );
    await queryRunner.query("INSERT INTO categories (name) VALUES ('Ofertas')");

    await queryRunner.query("INSERT INTO sizes (name) VALUES ('PP')");
    await queryRunner.query("INSERT INTO sizes (name) VALUES ('P')");
    await queryRunner.query("INSERT INTO sizes (name) VALUES ('M')");
    await queryRunner.query("INSERT INTO sizes (name) VALUES ('G')");
    await queryRunner.query("INSERT INTO sizes (name) VALUES ('GG')");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DELETE FROM categories WHERE name = 'Novidades'");
    await queryRunner.query("DELETE FROM categories WHERE name = 'Ofertas'");

    await queryRunner.query("DELETE FROM sizes WHERE name = 'PP'");
    await queryRunner.query("DELETE FROM sizes WHERE name = 'P'");
    await queryRunner.query("DELETE FROM sizes WHERE name = 'M'");
    await queryRunner.query("DELETE FROM sizes WHERE name = 'G'");
    await queryRunner.query("DELETE FROM sizes WHERE name = 'GG'");
  }
}
