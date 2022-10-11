import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsOrdersModule } from './products-orders/products-orders.module';

@Module({
  imports: [
    ProductsModule,
    CustomersModule,
    OrdersModule,
    ProductsOrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
