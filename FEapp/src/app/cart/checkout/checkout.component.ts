import { Component, OnInit } from '@angular/core';
import { ProductReceiverService } from 'src/app/services/product-receiver.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  fullName:string=""
  address:string=""
  cardNum:string=""
  good:boolean=false
  good2:boolean=false
  good3:boolean=false


  constructor(private getter: ProductReceiverService) { }

  ngOnInit(): void {
  }
  submitForm():void{
    this.getter.getName(this.fullName)
    this.fullName='';
    this.cardNum='';
    this.address='';
  }
  untilGood(arg:number){
    if(this.fullName.length >= 8)
    this.good=true
    else
    this.good=false
  }
  untilGood2(arg:number){
    if(this.address.length >= 4)
    this.good2=true
    else
    this.good2=false
  }
  untilGood3(arg:number){
    console.log(typeof this.cardNum)
    if(this.cardNum.length == 16 && typeof parseInt(this.cardNum) ==='number')
    this.good3=true
    else
    this.good3=false
  }

}
