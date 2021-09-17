import { Component, OnInit } from '@angular/core';
import { ProductReceiverService } from 'src/app/services/product-receiver.service';
import { Product } from '../../models/Product';
import { ProductShowService } from '../../services/product-show.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  product:Product={
		url : '',
		name : '',
		price : 0,
		description:'',
		amount : 0
		}
  amountIdle:number=1;
  constructor(private detail: ProductShowService, private getter:ProductReceiverService) { }

  ngOnInit(): void {
    this.product = this.detail.selection
  }
  addToCart():void{
    this.getter.addToCart(this.product, this.amountIdle)
  }
  addProducts():void{
    this.amountIdle++;
  }
  removeProducts():void{
    this.amountIdle--
  }
  type(){
    if (this.detail.selection.id == undefined)
    return true
    else (this.detail.selection.id != undefined)
    return false
  }
  disabled():boolean{
    if (this.amountIdle <= 1) {
      return true
    } else {
      return false
    }
  }
}
