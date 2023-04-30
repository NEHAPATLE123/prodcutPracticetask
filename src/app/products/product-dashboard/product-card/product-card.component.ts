import { Component, Input, OnInit } from '@angular/core';
import { ProductStats } from 'src/app/shared/const/productEnum';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
@Input('product') prodObj !: Iproduct
  productArray !:Array<Iproduct> 
  
  allProductArray  = ProductStats;

  constructor( private _productService: ProductsService) { }

  ngOnInit(): void {
    this.productArray = this._productService.getAllProducts()
  }

  onStatusChange(status: ProductStats){
    this._productService.updateStatus(this.prodObj, status)
  }
}
