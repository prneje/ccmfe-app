import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherpaymentComponent } from './otherpayment.component';


const routes: Routes = [
  {path: "otherPayment", component: OtherpaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherPaymentRoutingModule { }
