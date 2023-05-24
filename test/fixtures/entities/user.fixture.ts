import { User } from '../../../src/user/entities/user.entity';
import { DeepPartial } from 'typeorm';

export const users: DeepPartial<User>[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@mail.com',
  },
];
