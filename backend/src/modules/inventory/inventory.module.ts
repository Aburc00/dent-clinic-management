import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { ProductService } from './services/product.service';
import { InventoryService } from './services/inventory.service';
import { UtsService } from './services/uts.service';

@Module({
  controllers: [InventoryController],
  providers: [ProductService, InventoryService, UtsService],
})
export class InventoryModule {}

