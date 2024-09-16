import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditcardModule } from './creditcard/creditcard.module';
import { OtherpaymentComponent } from './otherpayment/otherpayment.component';
import { OtherpaymentModule } from './otherpayment/otherpayment.module';

@NgModule({
  declarations: [
    AppComponent,
    OtherpaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreditcardModule,
    OtherpaymentModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
