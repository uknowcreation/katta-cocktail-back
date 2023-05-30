import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Cocktail } from '../../cocktail/entities/cocktail.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn()
  user!: User;

  @ManyToOne(() => Cocktail, (cocktail) => cocktail.orders)
  @JoinColumn()
  cocktail!: Cocktail;
}
