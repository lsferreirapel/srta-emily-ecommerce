import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { IsNotEmpty } from 'class-validator/types/decorator/common/IsNotEmpty';
import { MaxLength } from 'class-validator/types/decorator/string/MaxLength';
import { IsBoolean, IsPositive, Max, Min } from 'class-validator';

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

  // categories: Category[];
  // sizes: Size[];
  // pictures: Picture[];

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
}
