import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './modules/patients/patients.module';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { BillingModule } from './modules/billing/billing.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { UsersModule } from './modules/users/users.module';
import { FilesModule } from './modules/files/files.module';
import { AuthModule } from './modules/auth/auth.module';
import { EInvoiceModule } from './modules/e-invoice/e-invoice.module';
import { PosModule } from './modules/pos/pos.module';
import { PayoutModule } from './modules/payout/payout.module';

@Module({
  imports: [
    PatientsModule,
    AppointmentsModule,
    BillingModule,
    InventoryModule,
    NotificationsModule,
    UsersModule,
    FilesModule,
    AuthModule,
    EInvoiceModule,
    PosModule,
    PayoutModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
