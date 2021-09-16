import { Component, Input, Output, OnInit } from '@angular/core';
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

  constructor(private cart: ProductReceiverService, private detail: ProductShowService) { 
	this.product ={
		url : '',
		name : '',
		price : 0,
		description:'',
		amount : 0
		}
	}

  ngOnInit(): void {
	this.product.amount=1
  }
  addProducts(product:Product):void{
    product.amount++
  }
  removeProducts(product:Product):void{
    product.amount--
  }
  addToCart(){
    this.cart.addToCart(this.product)
  }
  getDetail(product:Product){
    this.detail.getDetail(product)
  }

  disabled():boolean{
    if (this.product.amount == 1) {
      return true
    } else {
      return false
    }


  }

}