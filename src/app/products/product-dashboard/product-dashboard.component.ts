import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  productsArray : Array<Iproduct> = [];

  constructor( private _productService : ProductsService) { }

  ngOnInit(): void {
    this.productsArray = this._productService.getAllProducts()
    console.log(this.productsArray);
  }

}
