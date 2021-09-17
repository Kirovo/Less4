import { Component, OnInit} from '@angular/core';
import { ProductReceiverService } from '../../services/product-receiver.service';
import { Product } from '../../models/Product';
@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent implements OnInit {
  cartList:Product[]=[];
  total:number=0;

  constructor(private cart: ProductReceiverService) {}

  ngOnInit(): void {  
    this.cartList=this.cart.subOrder
    this.calculateTotal()
  }
  calculateTotal(){
    var total: number =0;
    for(var i = 0; i < this.cartList.length;i++){
      total += this.cartList[i].price * this.cartList[i].amount
    }
    this.total = parseFloat(total.toFixed(2));

    this.cart.total=this.total
  }
  resetCart(){
    this.cart.resetCart();
    this.cartList=this.cart.subOrder
    this.calculateTotal()
    alert("Cart reset")
  }
  deleteItem(product:Product){
    this.cart.deleteItem(product)
    this.cartList=this.cart.subOrder
    this.calculateTotal()
  }  
}
