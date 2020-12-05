import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// Validators
import {
  IsBoolean,
  IsPositive,
  Max,
  Min,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

// Models
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

  @Column()
  @IsNotEmpty()
  @Min(0)
  price: number;

  @Column()
  @IsNotEmpty()
  @Min(0)
  @Max(100)
  interest: number; // If 0 interest-free, 2 = 2% per installment

  @ManyToMany(() => Category, category => category.products)
  @JoinTable()
  categories: Category[];

  @ManyToMany(() => Size, size => size.products)
  @JoinTable()
  sizes: Size[];

  @OneToMany(() => Picture, picture => picture.product)
  pictures: Picture[];

  @Column()
  @IsNotEmpty()
  @Min(0)
  @Max(100)
  discount: number; // In percentage, example: 20 means 20%

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
