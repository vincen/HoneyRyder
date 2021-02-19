import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);

    // FIXIT becase params.get() returen an union type, string | null
    // this.route.paramMap.subscribe(params => {
    //   this.product = products[+params.get('productId')];
    // });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
