import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderDetails: any;
  constructor(private productsSer: ProductsService) { }

  ngOnInit(): void {
    this.productsSer.getProducts().pipe(
      filter(res => res!== undefined &&  res!==null)
    ).subscribe((response : any)=> { 
      this.orderDetails =response;
      
    })
  }

}
