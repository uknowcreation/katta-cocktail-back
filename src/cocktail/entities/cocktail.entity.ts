import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cocktail {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar', { length: 1000 })
  name!: string;

  @Column('varchar', { length: 1000 })
  description!: string;
}
