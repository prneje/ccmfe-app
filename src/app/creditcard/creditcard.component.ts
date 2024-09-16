import { Component } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrl: './creditcard.component.css'
})
export class CreditcardComponent {

  public counter =0;
  selectedTab: string = 'creditCard';
  handleCounter(){
    this.counter+=1;

  }

  handleSubmit(){
    const customEvent = new CustomEvent("parentCallBack", {detail: "thank you for the payment"});
    window.dispatchEvent(customEvent);
  }
  openTab(tabName: string) {
    this.selectedTab = tabName;
  }
}
