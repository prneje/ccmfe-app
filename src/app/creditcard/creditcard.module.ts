import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditcardRoutingModule } from './creditcard-routing.module';
import { CreditcardComponent } from './creditcard.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    CreditcardComponent
  ],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    CreditcardRoutingModule,
    BrowserModule

  ]
})
export class CreditcardModule { }
