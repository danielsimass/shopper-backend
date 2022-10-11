import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProductsOrderDto } from './dto/create-products-order.dto';
import { UpdateProductsOrderDto } from './dto/update-products-order.dto';
import { ProductsOrder } from './entities/products-order.entity';

interface ProductsToSave {
  id: number;
  name: string;
  price: string;
  qty_stock: string;
  url: string;
  category: string;
  quantity: number;
}

@Injectable()
export class ProductsOrdersService {
  constructor(
    @Inject('PRODUCT_ORDER_REPOSITORY')
    private productOrderRepository: Repository<ProductsOrder>,
  ) {}

  create(createProductsOrderDto: CreateProductsOrderDto) {
    return 'This action adds a new productsOrder';
  }

  findAll() {
    return `This action returns all productsOrders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productsOrder`;
  }

  update(id: number, updateProductsOrderDto: UpdateProductsOrderDto) {
    return `This action updates a #${id} productsOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} productsOrder`;
  }
  async createProductByOrder(orderId: number, products: Array<ProductsToSave>) {
    for (const product of products) {
      const productOrder = this.productOrderRepository.create({
        product: { id: product.id },
        order: { id: orderId },
        qtd: product.quantity,
      });
      await this.productOrderRepository.save(productOrder);
    }
  }
}
