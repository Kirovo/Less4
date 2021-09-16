import { Component, OnInit } from '@angular/core';
import { ProductReceiverService } from 'src/app/services/product-receiver.service';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  fullName:string="";
  total:number=0;


  constructor(private getter:ProductReceiverService) { }

  ngOnInit(): void {
    this.fullName = this.getter.fullName
    this.total = this.getter.total
    this.getter.resetCart();
  }

}
