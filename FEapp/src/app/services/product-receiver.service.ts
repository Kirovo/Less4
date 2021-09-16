import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductReceiverService {
    subOrder: Product[];
    total:number;
    fullName:string;
    id:number;
  constructor() { 
    this.id=1;
    this.subOrder=[];
    this.total=0;
    this.fullName="";
  }
  
  addToCart(product: Product){
    try{
      product.id=this.id
      this.subOrder.push(product)
      this.id++;
      alert(product.amount+" "+product.name+" have been added to the cart")
    }catch{
      alert("Something went wrong. Please try again later")
    }
  }

  resetCart(){
    this.subOrder.splice(0)
  }
  deleteItem(product:Product){
    const item = this.subOrder.findIndex(ele => ele.id == product.id)
    this.subOrder.splice(item,1)
  }
  getName(fullName:string){
    this.fullName=fullName
  }

}
