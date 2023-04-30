import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './product-dashboard/product-form/product-form.component';
import { ProductCardComponent } from './product-dashboard/product-card/product-card.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductFormComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [ ProductDashboardComponent ]
})
export class ProductsModule { }
