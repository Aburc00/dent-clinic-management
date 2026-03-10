import { Injectable } from '@nestjs/common';

export type PosProvider = 'IYZICO' | 'PAYTR';

@Injectable()
export class PosProviderFactory {
  resolve(provider: PosProvider) {
    return { provider };
  }
}

