import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductShowService {
  selection:Product ={
    url:"",
    name:"",
    price:0,
    description:"",
    amount:0
  }
  constructor() { }
  
  getDetail(product:Product) : void{
    this.selection=product
  }
}
