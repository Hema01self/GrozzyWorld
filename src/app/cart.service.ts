import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  cartItemCount = new BehaviorSubject(0); //it return observable we can use whereever by using subscribe
  constructor(private http: HttpClient) {}
  addToCart(product: Product) {
    //here the Product specifies the datatype of variables that mentioned in Product Interface

      this.items.push(product); // push->push the item to cart

    this.cartItemCount.next(this.cartItemCount.value + 1); // next->data is passed where ever subscribed
    // this.saveCartToDatabase().subscribe(
      // response => console.log('Cart items saved to db.json'),
      // error => console.error('Failed to save cart items:', error)
    // );

  }
  // saveCartToDatabase() {
    // return this.http.post('http://localhost:3000/cart', this.items);
  // }

  getCartCount() {
    return this.cartItemCount.asObservable();
  }
  removeFromCart(product: Product) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
      this.cartItemCount.next(this.items.length);

    }
  }
  getItems() {
    return this.items;
  }
  emptyCart() {
    this.items = [];
    this.cartItemCount.next(0);

    return this.items;
  }


}
