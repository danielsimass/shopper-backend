import { Customer } from 'src/customers/entities/customer.entity';
import { ProductsOrder } from 'src/products-orders/entities/products-order.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @ManyToOne(() => Customer, (customer) => customer.id)
  customer: Customer;

  @OneToMany(() => ProductsOrder, (productOrder) => productOrder.id)
  productOrder: ProductsOrder[];
}
