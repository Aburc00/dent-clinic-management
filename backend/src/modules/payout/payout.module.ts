import { Module } from '@nestjs/common';
import { PayoutController } from './payout.controller';
import { PayoutRuleService } from './services/payout-rule.service';
import { PayoutCalculationService } from './services/payout-calculation.service';

@Module({
  controllers: [PayoutController],
  providers: [PayoutRuleService, PayoutCalculationService],
})
export class PayoutModule {}

