import { Component, OnInit } from '@angular/core';
import { Iproduct } from './shared/models/product';
import { ProductStats } from './shared/const/productEnum';
import { ProductsService } from './shared/services/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'product-task';
  allProductArray = ProductStats;
  productArray : Array<Iproduct> = [];

  constructor(private _productService : ProductsService){
  }

  ngOnInit(): void {
    this.productArray = this._productService.productArray
  }

  

  onStatusChange(pId:string, status:string ){
  }

  uid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
