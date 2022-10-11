import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ordersProviders } from './orders.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ProductsOrdersModule } from 'src/products-orders/products-orders.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [DatabaseModule, ProductsOrdersModule, ProductsModule],
  controllers: [OrdersController],
  providers: [OrdersService, ...ordersProviders],
})
export class OrdersModule {}
