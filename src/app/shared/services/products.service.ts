import { Injectable } from '@angular/core';
import { ProductStats } from '../const/productEnum';
import { Iproduct } from '../models/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // api call to get products data from database 
  productArray : Array<Iproduct> = [
    { 
      pname: "Samsung 31",
      pdetails: "Mobile 128 6",
      pstatus : ProductStats.InProgress,
      id: "gsfg",
    },
    {
      pname: "Samsung 123 43",
      pdetails: "Mobile 128 6",
      pstatus : ProductStats.Disptached,
      id: "gsdf",
    }
  ]

  constructor(private _snackBarService : SnackBarService) { }

  getAllProducts() : Array<Iproduct> {
    return this.productArray
  }


  addProduct( prod : Iproduct) : void {
    this.productArray.push(prod);
    this._snackBarService.onopenSnackBar(`${prod.pname} is added successfully`)
}

updateStatus(prodObj: Iproduct, status :ProductStats){
  this.productArray.forEach(prod => {
  if(prod.id === prodObj.id ){
    prod.pstatus = status
   }
   this._snackBarService.onopenSnackBar(`The status OF product ${prodObj.id} is changed to ${status}`)
  })
}


}  



  