import { Component, Input, OnInit } from '@angular/core';
import { ProductReceiverService } from '../../services/product-receiver.service';
import { Product} from '../../models/Product'
import { ProductShowService } from '../../services/product-show.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	@Input() product:Product;
  amountIdle:number;

  constructor(private cart: ProductReceiverService, private detail: ProductShowService) { 
	  this.product ={
      url : '',
      name : '',
      price : 0,
      description:'',
      amount : 0
		}
    this.amountIdle=1;
    
	}

  ngOnInit(): void {
    this.product.amount=1
  }
  addProducts():void{
    this.amountIdle++
  }
  removeProducts():void{
    this.amountIdle--
  }
  addToCart(){
    this.cart.addToCart(this.product, this.amountIdle)
  }
  getDetail(product:Product){
    this.detail.getDetail(product)
  }

  disabled():boolean{
    if (this.amountIdle == 1) {
      return true
    } else {
      return false
    }
  }

}