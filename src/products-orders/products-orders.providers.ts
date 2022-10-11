import { DataSource } from 'typeorm';
import { ProductsOrder } from './entities/products-order.entity';

export const productsOrderProviders = [
  {
    provide: 'PRODUCT_ORDER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductsOrder),
    inject: ['DATA_SOURCE'],
  },
];
