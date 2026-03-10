import { Module } from '@nestjs/common';
import { PosController } from './pos.controller';
import { PosProviderFactory } from './services/pos-provider.factory';
import { PaymentLinkService } from './services/payment-link.service';

@Module({
  controllers: [PosController],
  providers: [PosProviderFactory, PaymentLinkService],
})
export class PosModule {}

