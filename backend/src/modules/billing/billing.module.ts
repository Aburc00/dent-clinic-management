import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { TariffService } from './services/tariff.service';
import { PricingService } from './services/pricing.service';
import { InvoiceService } from './services/invoice.service';
import { PaymentService } from './services/payment.service';

@Module({
  controllers: [BillingController],
  providers: [TariffService, PricingService, InvoiceService, PaymentService],
  exports: [PricingService, InvoiceService, PaymentService],
})
export class BillingModule {}
