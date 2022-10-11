import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-products.dto';
import { UpdateProductDto } from './dto/update-products.dto';
import { Product } from './entities/products.entity';
import * as fs from 'fs';
import { CsvParser } from 'nest-csv-parser';

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
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
    private readonly csvParser: CsvParser,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findByCategory(category: string) {
    return await this.productRepository.find({ where: { category: category } });
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} procuct`;
  }

  remove(id: number) {
    return `This action removes a #${id} procuct`;
  }

  async seed() {
    const stream = fs.createReadStream(
      '/home/daniel/workspace/shopper/backend/src/products/products.csv',
    );
    const entities = await this.csvParser.parse(stream, Product, null, null, {
      strict: true,
      separator: ',',
    });
    for (const product of entities.list) {
      await this.create(product);
    }
    return entities.list;
  }

  async checkStock(id: number, quantity: number) {
    const product = await this.findOne(id);
    if (product.qty_stock - quantity >= 0) {
      return true;
    } else {
      return false;
    }
  }

  async updateStock(products: Array<ProductsToSave>) {
    for (const item of products) {
      const product = await this.findOne(item.id);
      const newStock = +product.qty_stock - item.quantity;
      await this.productRepository.update(item.id, { qty_stock: newStock });
    }
  }
}
