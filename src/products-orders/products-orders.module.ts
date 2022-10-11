import { Module } from '@nestjs/common';
import { ProductsOrdersService } from './products-orders.service';
import { ProductsOrdersController } from './products-orders.controller';
import { DatabaseModule } from 'src/database/database.module';
import { productsOrderProviders } from './products-orders.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsOrdersController],
  providers: [ProductsOrdersService, ...productsOrderProviders],
  exports: [ProductsOrdersService],
})
export class ProductsOrdersModule {}
