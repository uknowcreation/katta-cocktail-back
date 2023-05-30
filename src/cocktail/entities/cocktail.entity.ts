import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Order } from '../../order/entities/order.entity';

@Entity()
export class Cocktail {
  @OneToMany(() => Order, (order) => order.cocktail)
  @JoinColumn()
  orders!: Order[];

  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar', { length: 1000 })
  name!: string;

  @Column('varchar', { length: 1000 })
  description!: string;
}
