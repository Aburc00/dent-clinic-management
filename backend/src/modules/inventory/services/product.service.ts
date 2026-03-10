import { Injectable } from '@nestjs/common';
import { Product } from '../domain/models';
import { CreateProductDto } from '../dto/create-product.dto';

@Injectable()
export class ProductService {
  private readonly products: Product[] = [];

  list() {
    return this.products;
  }

  create(input: CreateProductDto): Product {
    const product: Product = {
      id: `prod-${Date.now()}`,
      clinicId: input.clinicId,
      name: input.name,
      category: input.category,
      unit: input.unit,
      utsCode: input.utsCode,
      isConsumable: input.isConsumable,
      trackBySerial: input.trackBySerial,
      defaultReorderLevel: input.defaultReorderLevel,
    };

    this.products.push(product);
    return product;
  }
}

