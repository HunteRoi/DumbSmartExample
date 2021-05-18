import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Invoice } from '../../models/invoice';
import { InvoicesService } from '../../services/invoices.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit, OnChanges {
  invoices$: Observable<Invoice[]>;

  constructor(private invoicesService: InvoicesService) {}

  ngOnInit(): void {
    this.invoices$ = this.invoicesService.getInvoices$();
  }

  ngOnChanges() {
    this.invoices$ = this.invoicesService.getInvoices$();
  }

  delete(invoice: Invoice): void {
    console.log('delete', invoice);
    this.invoicesService.deleteInvoice(invoice);
    this.ngOnChanges();
  }

}
