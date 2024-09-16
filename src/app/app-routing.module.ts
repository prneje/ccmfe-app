import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { OtherpaymentComponent } from './otherpayment/otherpayment.component';


const routes: Routes = [
  {path: '', redirectTo: '/payment', pathMatch: 'full'},
  {path: 'payment', component: CreditcardComponent},
  {path: 'otherPayment', component: OtherpaymentComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
