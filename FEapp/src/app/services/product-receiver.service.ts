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
  
  addToCart(product: Product, amount:number) {
      let found = this.subOrder.find(ele => ele.name == product.name)
      let index = this.subOrder.findIndex(ele => ele.name == product.name)
      if (typeof found === 'undefined') {
        product.id=this.id
        product.amount=amount
        this.subOrder.push(product);
        this.id++;
      } else {
        this.subOrder[index].amount=this.subOrder[index].amount+amount;
      }
      
      alert(amount+" "+product.name+" have been added to the cart")

  }

  resetCart(){
    this.subOrder.splice(0)
  }
  deleteItem(product:Product){
    const item = this.subOrder.findIndex(ele => ele.id == product.id)
    this.subOrder.splice(item,1)
    alert(product.amount + " " + product.name + " have been removed" )
  }
  getName(fullName:string){
    this.fullName=fullName
  }

}
