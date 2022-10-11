import { Inject, Injectable } from '@nestjs/common';
import { ProductsOrdersService } from 'src/products-orders/products-orders.service';
import { ProductsService } from 'src/products/products.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { RequestOrderBody } from './orders.controller';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDER_REPOSITORY')
    private oderRepository: Repository<Order>,
    private productsOrdersService: ProductsOrdersService,
    private productsService: ProductsService,
  ) {}

  async create(requestBody: RequestOrderBody) {
    const order = this.oderRepository.create({
      customer: { id: requestBody.customerId },
    });
    const savedOrder = await this.oderRepository.save(order);
    await this.productsOrdersService.createProductByOrder(
      savedOrder.id,
      requestBody.products,
    );
    await this.productsService.updateStock(requestBody.products);
    return true;
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
