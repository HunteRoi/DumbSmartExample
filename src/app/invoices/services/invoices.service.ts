import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { Invoice } from '../models/invoice';

@Injectable()
export class InvoicesService {
  private _invoices: Invoice[];

  constructor() {
    this._invoices = [
      { name: 'Invoice 1', url_download: 'https://google.be' } as Invoice,
      { name: 'Invoice 2', url_download: 'https://google.fr' } as Invoice
    ];
  }

  getInvoices$(): Observable<Invoice[]> {
    return of(this._invoices);
  }

  deleteInvoice(invoice: Invoice) {
    this._invoices = this._invoices.filter(i => i.name !== invoice.name);
  }
}
