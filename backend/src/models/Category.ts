import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

// Validators
import { IsNotEmpty, MaxLength } from 'class-validator';

// Models
import Product from './Product';

@Entity('categories')
@Unique(['name'])
export default class Category {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @ManyToMany(() => Product, product => product.categories)
  products: Product[];

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
