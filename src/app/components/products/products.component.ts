import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productDetails: any;
  constructor(private productsSer: ProductsService) { }

  ngOnInit(): void {
    this.productsSer.getProducts().pipe(
      filter(res => res!== undefined &&  res!==null)
    ).subscribe((response : any)=> { 
      this.productDetails =response;
      
    })
  }

}
