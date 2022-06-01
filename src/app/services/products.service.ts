import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private listOfProducts = [];
  cartItems = [];

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('/assets/product-data.json');// http call to retrieve list of products
  };

  getOrderData() {
    return this.http.get('/assets/order-data.json');
  }

  clearCart() {
    this.cartItems = [];
  }
}
