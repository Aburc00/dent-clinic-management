import { Injectable } from '@nestjs/common';

@Injectable()
export class PayoutRuleService {
  getRules(doctorId: string) {
    return [{ doctorId }];
  }

  createRule(payload: unknown) {
    return { id: 'rule_demo', payload };
  }
}

