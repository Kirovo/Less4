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



  constructor(private getter: ProductReceiverService) { }

  ngOnInit(): void {
  }
  submitForm():void{
    this.getter.getName(this.fullName)
    this.fullName='';
    this.cardNum='';
    this.address='';
  }


}
