import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1691067128793 implements MigrationInterface {
    name = 'InitialMigration1691067128793'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`real_estate\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` varchar(12) NOT NULL, \`sold\` tinyint NOT NULL DEFAULT 0, \`rented\` tinyint NOT NULL DEFAULT 0, \`value\` decimal(12,2) NOT NULL DEFAULT '0.00', \`size\` int NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`addressId\` int NULL, \`categoryId\` int NULL, UNIQUE INDEX \`IDX_ad34ba50eefb48a4e62a7f552a\` (\`code\`), UNIQUE INDEX \`REL_44ae17efa35575b6a6f83b35ee\` (\`addressId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`schedules\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` date NOT NULL, \`hour\` time NOT NULL, \`userId\` int NULL, \`realEstateId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(45) NOT NULL, \`email\` varchar(45) NOT NULL, \`phone\` varchar(12) NULL, \`admin\` tinyint NOT NULL DEFAULT 0, \`password\` varchar(120) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp(6) NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), UNIQUE INDEX \`IDX_a000cca60bcf04454e72769949\` (\`phone\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(45) NOT NULL, UNIQUE INDEX \`IDX_8b0be371d28245da6e4f4b6187\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`real_estate\` ADD CONSTRAINT \`FK_44ae17efa35575b6a6f83b35ee5\` FOREIGN KEY (\`addressId\`) REFERENCES \`addresses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`real_estate\` ADD CONSTRAINT \`FK_e64472d578faf91bee90a06ecc0\` FOREIGN KEY (\`categoryId\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`schedules\` ADD CONSTRAINT \`FK_19c54f24597b318be3892114c75\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`schedules\` ADD CONSTRAINT \`FK_ac3131bb922483053abebc5e9ff\` FOREIGN KEY (\`realEstateId\`) REFERENCES \`real_estate\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`schedules\` DROP FOREIGN KEY \`FK_ac3131bb922483053abebc5e9ff\``);
        await queryRunner.query(`ALTER TABLE \`schedules\` DROP FOREIGN KEY \`FK_19c54f24597b318be3892114c75\``);
        await queryRunner.query(`ALTER TABLE \`real_estate\` DROP FOREIGN KEY \`FK_e64472d578faf91bee90a06ecc0\``);
        await queryRunner.query(`ALTER TABLE \`real_estate\` DROP FOREIGN KEY \`FK_44ae17efa35575b6a6f83b35ee5\``);
        await queryRunner.query(`DROP INDEX \`IDX_8b0be371d28245da6e4f4b6187\` ON \`categories\``);
        await queryRunner.query(`DROP TABLE \`categories\``);
        await queryRunner.query(`DROP INDEX \`IDX_a000cca60bcf04454e72769949\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`schedules\``);
        await queryRunner.query(`DROP INDEX \`REL_44ae17efa35575b6a6f83b35ee\` ON \`real_estate\``);
        await queryRunner.query(`DROP INDEX \`IDX_ad34ba50eefb48a4e62a7f552a\` ON \`real_estate\``);
        await queryRunner.query(`DROP TABLE \`real_estate\``);
    }

}
