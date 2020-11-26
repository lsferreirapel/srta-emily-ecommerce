import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import {
  IsBoolean,
  IsPositive,
  Max,
  Min,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

import Category from './Category';
import Size from './Size';
import Picture from './Picture';

@Entity('products')
export default class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @Column()
  @IsNotEmpty()
  @MaxLength(200)
  description: string;

  @Column()
  @IsNotEmpty()
  @MaxLength(30)
  brand: string;

  @ManyToMany(type => Category, products => Product, {
    eager: true,
    cascade: ['insert', 'update'],
  })
  @JoinTable()
  categories: Category[];

  @ManyToMany(type => Size, products => Product, {
    eager: true,
    cascade: ['insert', 'update'],
  })
  @JoinTable()
  sizes: Size[];

  @OneToMany(type => Picture, product => Product, {
    cascade: ['insert', 'update'],
  })
  pictures: Picture[];

  @Column()
  @IsNotEmpty()
  @IsPositive()
  @Min(0)
  @Max(100)
  discount: number; // 0 - 100

  @Column()
  @IsNotEmpty()
  freeShipping: boolean;

  @Column()
  @IsNotEmpty()
  @IsBoolean()
  isNew: boolean;

  @Column()
  @IsNotEmpty()
  @IsPositive()
  @Min(0)
  @Max(10)
  rating: number; // 0 - 10

  @Column()
  @IsNotEmpty()
  @IsPositive()
  numberOfReviews: number;

  @Column()
  @IsNotEmpty()
  @IsPositive()
  countInStock: number;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
