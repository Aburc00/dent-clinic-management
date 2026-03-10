import { Module } from '@nestjs/common';
import { EInvoiceService } from './e-invoice.service';

@Module({
  providers: [EInvoiceService],
  exports: [EInvoiceService],
})
export class EInvoiceModule {}

