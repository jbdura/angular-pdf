import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoice-app';
yourName!: string;
yourAddress!: string;
yourPhoneNumber!: string;
yourEmail!: string;
buyerName!: string;
buyerAddress!: string;
buyerPhoneNumber!: string;
buyerEmail!: string;
invoiceNumber!: string;
invoiceDate!: string;
paymentDue!: string;
items!: any[];
totalAmount!: number;
discountAmount!: number;
taxAmount!: number;
}
