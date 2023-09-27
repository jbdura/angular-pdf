import { Component, Input } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrls: [ './invoice-page.component.scss' ]
})

export class InvoicePageComponent {
  @Input() yourName: string = '';
  @Input() yourAddress: string = '';
  @Input() yourPhoneNumber: string = '';
  @Input() yourEmail: string = '';
  @Input() buyerName: string = '';
  @Input() buyerAddress: string = '';
  @Input() buyerPhoneNumber: string = '';
  @Input() buyerEmail: string = '';
  @Input() invoiceNumber: string = '';
  @Input() invoiceDate: string = '';
  @Input() paymentDue: string = '';
  @Input() items: any[] = [];
  @Input() totalAmount: number = 0;
  @Input() discountAmount: number = 0;
  @Input() taxAmount: number = 0;

  generatePdf() {
    // Define variables with your dynamic data
    const invoiceTitle = 'Invoice';
    const yourInformationTitle = 'Your Information';
    const yourName = 'Your Name/Business Name';
    const yourAddress = 'Your Address';
    const yourPhoneNumber = 'Your Phone Number';
    const yourEmail = 'Your Email';

    // Create the docDefinition with dynamic data
    const docDefinition = {
      content: [
        { text: invoiceTitle, style: 'header' },
        { text: yourInformationTitle, style: 'subheader' },
        // Your details
        { text: `Name: ${yourName}` },
        { text: `Address: ${yourAddress}` },
        { text: `Phone Number: ${yourPhoneNumber}` },
        { text: `Email: ${yourEmail}` },
        // Buyer's details
        { text: `Name: ${this.buyerName}`, style: 'subheader2' },
        { text: `Address: ${this.buyerAddress}`, style: 'subheader2' },
        { text: `Phone Number: ${this.buyerPhoneNumber}`, style: 'subheader2' },
        { text: `Email: ${this.buyerEmail}`, style: 'subheader2' },
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
        },
        subheader: {
          fontSize: 18,
          bold: true,
          margin: [ 0, 20, 0, 10 ], // Top, Right, Bottom, Left margins
        },
        subheader2: {
          fontSize: 18,
          bold: true,
          margin: [ 0, 10, 0, 10 ], // Top, Right, Bottom, Left margins
        },
      },
    };

    pdfMake.createPdf(docDefinition).open();
  }
}
