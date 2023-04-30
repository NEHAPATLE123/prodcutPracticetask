import { Component, OnInit } from '@angular/core';
import { ProductStats } from 'src/app/shared/const/productEnum';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UtitlityService } from 'src/app/shared/services/utitlity.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(
    private _utilityService : UtitlityService,
    private _productService : ProductsService) { }

  ngOnInit(): void {
  }

  onProductAdd(name: HTMLInputElement, detail:HTMLTextAreaElement){
    if(name.value.length > 0 && detail.value.length > 0 ){
      let prod : Iproduct = {
        pname : name.value,
        pdetails : detail.value,
        pstatus: ProductStats.InProgress,
        id : this._utilityService.uid()
      }
      name.value = '';
      detail.value = '';
      this._productService.addProduct(prod)
    }
    return false;
  }
 

}
