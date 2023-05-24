import { cocktails } from '../test/fixtures/entities/cocktail.fixture';
import { users } from '../test/fixtures/entities/user.fixture';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCocktailEntity1684914051573 implements MigrationInterface {
  name = 'AddCocktailEntity1684914051573';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`cocktail\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(1000) NOT NULL, \`description\` varchar(1000) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );

    for (const cocktail of cocktails) {
      await queryRunner.query(
        `INSERT INTO \`cocktail\` (\`name\`, \`description\`) VALUES ('${cocktail.name}', '${cocktail.description}')`,
      );
    }
    for (const user of users) {
      await queryRunner.query(
        `INSERT INTO \`user\` (\`firstName\`, \`lastName\`, \`email\`) VALUES ('${user.firstName}', '${user.lastName}', '${user.email}')`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`cocktail\``);
  }
}
