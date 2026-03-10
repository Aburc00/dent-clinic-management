import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TariffService } from './services/tariff.service';
import { InvoiceService } from './services/invoice.service';
import { PaymentService } from './services/payment.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { RecordPaymentDto } from './dto/record-payment.dto';

@Controller('billing')
export class BillingController {
  constructor(
    private readonly tariffService: TariffService,
    private readonly invoiceService: InvoiceService,
    private readonly paymentService: PaymentService,
  ) {}

  @Get('tariffs')
  getTariffs() {
    return this.tariffService.listTariffs();
  }

  @Post('tariffs/import')
  importTariffs(@Body() body: { source: string }) {
    return this.tariffService.importTariffs(body.source);
  }

  @Post('invoices')
  createInvoice(@Body() body: CreateInvoiceDto) {
    return this.invoiceService.createInvoice(body);
  }

  @Get('invoices/:id')
  getInvoice(@Param('id') id: string) {
    return this.invoiceService.getInvoice(id);
  }

  @Post('invoices/:id/send-gib')
  sendInvoiceToGib(@Param('id') id: string) {
    return this.invoiceService.sendToGib(id);
  }

  @Post('payments')
  createPayment(@Body() body: RecordPaymentDto) {
    return this.paymentService.recordPayment(body);
  }
}

