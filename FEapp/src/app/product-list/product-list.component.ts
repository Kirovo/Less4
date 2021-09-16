import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductStoreService } from '../services/product-store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products:Product[]=[];

  constructor(private productStore: ProductStoreService) {

  }
  
  ngOnInit(): void {
    this.productStore.getProducts().subscribe(res => {
      this.products = res
      
    })

    
  }
}
