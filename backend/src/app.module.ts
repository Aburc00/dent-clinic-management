import { Module } from '@nestjs/common';
import { BillingModule } from './modules/billing/billing.module';
import { EInvoiceModule } from './modules/e-invoice/e-invoice.module';
import { PosModule } from './modules/pos/pos.module';
import { PayoutModule } from './modules/payout/payout.module';
import { InventoryModule } from './modules/inventory/inventory.module';

@Module({
  imports: [BillingModule, EInvoiceModule, PosModule, PayoutModule, InventoryModule],
})
export class AppModule {}

