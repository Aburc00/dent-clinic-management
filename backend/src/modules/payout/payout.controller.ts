import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PayoutRuleService } from './services/payout-rule.service';
import { PayoutCalculationService } from './services/payout-calculation.service';

@Controller('payouts')
export class PayoutController {
  constructor(
    private readonly ruleService: PayoutRuleService,
    private readonly calculationService: PayoutCalculationService,
  ) {}

  @Get('rules')
  getRules(@Query('doctorId') doctorId: string) {
    return this.ruleService.getRules(doctorId);
  }

  @Post('rules')
  createRule(@Body() body: unknown) {
    return this.ruleService.createRule(body);
  }

  @Post('calculate')
  calculate(@Body() body: { periodMonth: number; periodYear: number; clinicId: string }) {
    return this.calculationService.calculate(body);
  }

  @Get('summary')
  summary(@Query('doctorId') doctorId: string, @Query('period') period: string) {
    return this.calculationService.summary(doctorId, period);
  }
}

