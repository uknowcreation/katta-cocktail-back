import { User } from '../../src/user/entities/user.entity';
import { Connection } from 'typeorm';
import { users } from './entities/user.fixture';

async function deleteFixtures(connection: Connection): Promise<void> {
  const tablesToDelete = ['user'];
  for (let i = 0; i < tablesToDelete.length; i++) {
    const table = tablesToDelete[i];
    await connection.manager.query(`DELETE FROM ${table}`);
    await connection.manager.query(`ALTER TABLE ${table} AUTO_INCREMENT = 1`);
  }
}

export async function loadFixtures(connection: Connection): Promise<void> {
  await deleteFixtures(connection);

  const userRepository = connection.getRepository(User);

  for (const user of users) {
    await userRepository.save(user);
  }
}
