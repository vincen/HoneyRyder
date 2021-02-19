import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:any = [];

  constructor(private httpClient: HttpClient) { }

  addToCart(product: any):void {
    this.items.push(product);
  }

  getItems():any {
    return this.items;
  }

  clearCart():any {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.httpClient.get('/assets/shipping.json');
  }

}
