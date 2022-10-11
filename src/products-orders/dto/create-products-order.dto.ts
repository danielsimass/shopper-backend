import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/products.entity';

export class CreateProductsOrderDto {
  id: number;
  productId: number;
  orderId: number;
  qtd: number;
}
