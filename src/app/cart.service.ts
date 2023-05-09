import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

   cartItemCount = new BehaviorSubject(0);//it return observable we can use whereever by using subscribe
constructor() { }
addToCart(product: Product){//here the Product specifies the datatype of variables that mentioned in Product Interface
  let itemIndex = this.items.findIndex((item) => item.name === product.name);
   if (itemIndex !== -1) {
     this.items[itemIndex].quantity += product.quantity;
   }

   else {
     this.items.push(product);// push->push the item to cart
  }
  this.cartItemCount.next(this.cartItemCount.value + 1);// next->data is passed where ever subscribed
  }
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
