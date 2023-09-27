import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: [ './invoice-form.component.scss' ]
})



export class InvoiceFormComponent implements OnInit {
  invoiceForm!: FormGroup;
  items: any[] = [];
  totalAmount: number = 0;
  showTaxField: boolean = true;
  discount: number = 0.0; // Add discount field

  constructor (private fb: FormBuilder) { }

  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
      item: [ '', Validators.required ],
      quantity: [ 1, [ Validators.required, Validators.min(1) ] ],
      pricePerUnit: [ 0.0, [ Validators.required, Validators.min(0.01) ] ],
      tax: [ 0.0 ],
      discount: [ 0.0 ] // Initialize discount field
    });
  }

  addItem() {
    if (this.invoiceForm.valid) {
      const newItem = this.invoiceForm.value;
      newItem.amount = newItem.quantity * newItem.pricePerUnit;
      this.items.push(newItem);
      this.calculateTotalAmount();

      // Show the tax field after an item is added
      this.showTaxField = true;

      // Reset the form for the next item
      this.invoiceForm.reset({
        quantity: 1,
        pricePerUnit: 0.0,
        tax: 0.0,
        discount: this.discount // Keep the discount value
      });
    }
  }

  calculateTotalAmount() {
    const subtotal = this.items.reduce((total, item) => total + item.amount, 0);
    this.totalAmount = subtotal - this.discount;
  }
}