import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RechargeComponent} from '../../pages/recharge/recharge.component';
import { PaymentService } from '../../services/payment.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RechargeComponent
  ],
  providers: [
    PaymentService
  ]
})
export class PaymentModule { }
