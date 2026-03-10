import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { InventoryService } from './services/inventory.service';
import { UtsService } from './services/uts.service';
import { CreateProductDto } from './dto/create-product.dto';
import { CreateMovementDto } from './dto/create-movement.dto';
import { RegisterImplantDto } from './dto/register-implant.dto';

@Controller('inventory')
export class InventoryController {
  constructor(
    private readonly productService: ProductService,
    private readonly inventoryService: InventoryService,
    private readonly utsService: UtsService,
  ) {}

  @Get('products')
  getProducts() {
    return this.productService.list();
  }

  @Post('products')
  createProduct(@Body() body: CreateProductDto) {
    return this.productService.create(body);
  }

  @Get('stock')
  getStock(@Query('locationId') locationId?: string) {
    return this.inventoryService.stock(locationId);
  }

  @Post('movements')
  createMovement(@Body() body: CreateMovementDto) {
    return this.inventoryService.move(body);
  }

  @Post('implants/register')
  registerImplant(@Body() body: RegisterImplantDto) {
    return this.utsService.registerImplant(body);
  }
}

