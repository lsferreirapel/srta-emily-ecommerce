import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateBaseClasses1606248307208
  implements MigrationInterface {
  name = 'createBaseClasses1606248307208';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "sizes" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "created_At" datetime NOT NULL DEFAULT (datetime('now')), "updated_At" datetime NOT NULL DEFAULT (datetime('now')))`,
    );
    await queryRunner.query(
      `CREATE TABLE "colors" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "rgb" varchar NOT NULL, "picturesId" integer)`,
    );
    await queryRunner.query(
      `CREATE TABLE "pictures" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "path" varchar NOT NULL, "created_At" datetime NOT NULL DEFAULT (datetime('now')), "updated_At" datetime NOT NULL DEFAULT (datetime('now')), "colorId" integer, "productId" integer)`,
    );
    await queryRunner.query(
      `CREATE TABLE "products" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "brand" varchar NOT NULL, "discount" integer NOT NULL, "freeShipping" boolean NOT NULL, "isNew" boolean NOT NULL, "rating" integer NOT NULL, "numberOfReviews" integer NOT NULL, "countInStock" integer NOT NULL, "created_At" datetime NOT NULL DEFAULT (datetime('now')), "updated_At" datetime NOT NULL DEFAULT (datetime('now')))`,
    );
    await queryRunner.query(
      `CREATE TABLE "categories" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "created_At" datetime NOT NULL DEFAULT (datetime('now')), "updated_At" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "products_categories_categories" ("productsId" integer NOT NULL, "categoriesId" integer NOT NULL, PRIMARY KEY ("productsId", "categoriesId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_40e7da0284a5389344605de8da" ON "products_categories_categories" ("productsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_e1d833224b5be535323207473f" ON "products_categories_categories" ("categoriesId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "products_sizes_sizes" ("productsId" integer NOT NULL, "sizesId" integer NOT NULL, PRIMARY KEY ("productsId", "sizesId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0801efda070836503c4d2fe861" ON "products_sizes_sizes" ("productsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ed24d3dcac72d9085e194354b4" ON "products_sizes_sizes" ("sizesId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_colors" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "rgb" varchar NOT NULL, "picturesId" integer, CONSTRAINT "FK_abb9053cfc7539b5b8fa0ee8853" FOREIGN KEY ("picturesId") REFERENCES "pictures" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_colors"("id", "name", "rgb", "picturesId") SELECT "id", "name", "rgb", "picturesId" FROM "colors"`,
    );
    await queryRunner.query(`DROP TABLE "colors"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_colors" RENAME TO "colors"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_pictures" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "path" varchar NOT NULL, "created_At" datetime NOT NULL DEFAULT (datetime('now')), "updated_At" datetime NOT NULL DEFAULT (datetime('now')), "colorId" integer, "productId" integer, CONSTRAINT "FK_8be9e742031e7e320e9a6c18aac" FOREIGN KEY ("colorId") REFERENCES "colors" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_c81df1a7a2d02711a092d423cfc" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_pictures"("id", "path", "created_At", "updated_At", "colorId", "productId") SELECT "id", "path", "created_At", "updated_At", "colorId", "productId" FROM "pictures"`,
    );
    await queryRunner.query(`DROP TABLE "pictures"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_pictures" RENAME TO "pictures"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_40e7da0284a5389344605de8da"`);
    await queryRunner.query(`DROP INDEX "IDX_e1d833224b5be535323207473f"`);
    await queryRunner.query(
      `CREATE TABLE "temporary_products_categories_categories" ("productsId" integer NOT NULL, "categoriesId" integer NOT NULL, CONSTRAINT "FK_40e7da0284a5389344605de8dab" FOREIGN KEY ("productsId") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_e1d833224b5be535323207473f1" FOREIGN KEY ("categoriesId") REFERENCES "categories" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("productsId", "categoriesId"))`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_products_categories_categories"("productsId", "categoriesId") SELECT "productsId", "categoriesId" FROM "products_categories_categories"`,
    );
    await queryRunner.query(`DROP TABLE "products_categories_categories"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_products_categories_categories" RENAME TO "products_categories_categories"`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_40e7da0284a5389344605de8da" ON "products_categories_categories" ("productsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_e1d833224b5be535323207473f" ON "products_categories_categories" ("categoriesId") `,
    );
    await queryRunner.query(`DROP INDEX "IDX_0801efda070836503c4d2fe861"`);
    await queryRunner.query(`DROP INDEX "IDX_ed24d3dcac72d9085e194354b4"`);
    await queryRunner.query(
      `CREATE TABLE "temporary_products_sizes_sizes" ("productsId" integer NOT NULL, "sizesId" integer NOT NULL, CONSTRAINT "FK_0801efda070836503c4d2fe8610" FOREIGN KEY ("productsId") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ed24d3dcac72d9085e194354b4e" FOREIGN KEY ("sizesId") REFERENCES "sizes" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("productsId", "sizesId"))`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_products_sizes_sizes"("productsId", "sizesId") SELECT "productsId", "sizesId" FROM "products_sizes_sizes"`,
    );
    await queryRunner.query(`DROP TABLE "products_sizes_sizes"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_products_sizes_sizes" RENAME TO "products_sizes_sizes"`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0801efda070836503c4d2fe861" ON "products_sizes_sizes" ("productsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ed24d3dcac72d9085e194354b4" ON "products_sizes_sizes" ("sizesId") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_ed24d3dcac72d9085e194354b4"`);
    await queryRunner.query(`DROP INDEX "IDX_0801efda070836503c4d2fe861"`);
    await queryRunner.query(
      `ALTER TABLE "products_sizes_sizes" RENAME TO "temporary_products_sizes_sizes"`,
    );
    await queryRunner.query(
      `CREATE TABLE "products_sizes_sizes" ("productsId" integer NOT NULL, "sizesId" integer NOT NULL, PRIMARY KEY ("productsId", "sizesId"))`,
    );
    await queryRunner.query(
      `INSERT INTO "products_sizes_sizes"("productsId", "sizesId") SELECT "productsId", "sizesId" FROM "temporary_products_sizes_sizes"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_products_sizes_sizes"`);
    await queryRunner.query(
      `CREATE INDEX "IDX_ed24d3dcac72d9085e194354b4" ON "products_sizes_sizes" ("sizesId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0801efda070836503c4d2fe861" ON "products_sizes_sizes" ("productsId") `,
    );
    await queryRunner.query(`DROP INDEX "IDX_e1d833224b5be535323207473f"`);
    await queryRunner.query(`DROP INDEX "IDX_40e7da0284a5389344605de8da"`);
    await queryRunner.query(
      `ALTER TABLE "products_categories_categories" RENAME TO "temporary_products_categories_categories"`,
    );
    await queryRunner.query(
      `CREATE TABLE "products_categories_categories" ("productsId" integer NOT NULL, "categoriesId" integer NOT NULL, PRIMARY KEY ("productsId", "categoriesId"))`,
    );
    await queryRunner.query(
      `INSERT INTO "products_categories_categories"("productsId", "categoriesId") SELECT "productsId", "categoriesId" FROM "temporary_products_categories_categories"`,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_products_categories_categories"`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_e1d833224b5be535323207473f" ON "products_categories_categories" ("categoriesId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_40e7da0284a5389344605de8da" ON "products_categories_categories" ("productsId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "pictures" RENAME TO "temporary_pictures"`,
    );
    await queryRunner.query(
      `CREATE TABLE "pictures" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "path" varchar NOT NULL, "created_At" datetime NOT NULL DEFAULT (datetime('now')), "updated_At" datetime NOT NULL DEFAULT (datetime('now')), "colorId" integer, "productId" integer)`,
    );
    await queryRunner.query(
      `INSERT INTO "pictures"("id", "path", "created_At", "updated_At", "colorId", "productId") SELECT "id", "path", "created_At", "updated_At", "colorId", "productId" FROM "temporary_pictures"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_pictures"`);
    await queryRunner.query(
      `ALTER TABLE "colors" RENAME TO "temporary_colors"`,
    );
    await queryRunner.query(
      `CREATE TABLE "colors" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "rgb" varchar NOT NULL, "picturesId" integer)`,
    );
    await queryRunner.query(
      `INSERT INTO "colors"("id", "name", "rgb", "picturesId") SELECT "id", "name", "rgb", "picturesId" FROM "temporary_colors"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_colors"`);
    await queryRunner.query(`DROP INDEX "IDX_ed24d3dcac72d9085e194354b4"`);
    await queryRunner.query(`DROP INDEX "IDX_0801efda070836503c4d2fe861"`);
    await queryRunner.query(`DROP TABLE "products_sizes_sizes"`);
    await queryRunner.query(`DROP INDEX "IDX_e1d833224b5be535323207473f"`);
    await queryRunner.query(`DROP INDEX "IDX_40e7da0284a5389344605de8da"`);
    await queryRunner.query(`DROP TABLE "products_categories_categories"`);
    await queryRunner.query(`DROP TABLE "categories"`);
    await queryRunner.query(`DROP TABLE "products"`);
    await queryRunner.query(`DROP TABLE "pictures"`);
    await queryRunner.query(`DROP TABLE "colors"`);
    await queryRunner.query(`DROP TABLE "sizes"`);
  }
}
