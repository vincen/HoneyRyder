import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Product } from '../model/product';
import { Delivery } from '../model/delivery';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:Array<Product> = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product):void {
    this.items.push(product);
  }

  getItems():Product[] {
    return this.items;
  }

  clearCart():Product[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices():Observable<Delivery> {
    return this.http.get<Delivery>('/assets/shipping.json').pipe(retry(1), catchError(this.processError));
  }

  processError(err: any) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
 }

}
