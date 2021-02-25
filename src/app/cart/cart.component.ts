import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../model/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[] = this.cartService.items;
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private fromBuilder: FormBuilder,
    ) {
      this.checkoutForm = this.fromBuilder.group({
        name: '',
        address: ''
      });
     }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset;
  }

}
