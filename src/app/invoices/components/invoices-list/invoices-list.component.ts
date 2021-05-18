import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent {
  @Input() invoices$: Observable<Invoice[]>;
  @Output() onInvoiceClick: EventEmitter<Invoice>;

  constructor() {
    this.onInvoiceClick = new EventEmitter<Invoice>();
  }

  onClick(invoice: Invoice): void {
    console.log('onClick', invoice);
    this.onInvoiceClick.emit(invoice);
  }
}
