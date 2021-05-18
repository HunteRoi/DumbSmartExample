import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices.routing';
import { InvoicesComponent } from './containers/invoices/invoices.component';
import { InvoicesService } from './services/invoices.service';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';


@NgModule({
  declarations: [
    InvoicesComponent,
    InvoicesListComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ],
  providers: [InvoicesService]
})
export class InvoicesModule { }
