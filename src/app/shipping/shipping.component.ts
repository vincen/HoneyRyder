import { Component, OnInit } from '@angular/core';
import { Delivery } from '../model/delivery';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts: any = [];

  fetchShippings() {
    this.cartService.getShippingPrices().subscribe((data: {}) => {
      this.shippingCosts = data;
    })
  }

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.fetchShippings();
  }

}
