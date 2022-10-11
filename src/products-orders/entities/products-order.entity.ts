import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/products.entity';
import { ManyToOne, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class ProductsOrder {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @ManyToOne(() => Product, (product) => product.id)
  product: Product;

  @ManyToOne(() => Order, (order) => order.id)
  order: Order;

  @Column({ type: 'numeric', default: 1 })
  qtd: number;
}
