import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PaymentLinkService } from './services/payment-link.service';
import { CreatePaymentLinkDto } from './dto/create-payment-link.dto';

@Controller('pos')
export class PosController {
  constructor(private readonly paymentLinkService: PaymentLinkService) {}

  @Post('payment-links')
  createPaymentLink(
    @Body()
    body: CreatePaymentLinkDto,
  ) {
    return this.paymentLinkService.createLink(body);
  }

  @Get('payment-links/:id')
  getPaymentLink(@Param('id') id: string) {
    return this.paymentLinkService.getLink(id);
  }
}

