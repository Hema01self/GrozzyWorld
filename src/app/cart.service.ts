import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey = 'cartItems';
  items: Product[] = [];

  cartItemCount = new BehaviorSubject(0); //it return observable we can use where ever by using subscribe
  constructor(private http: HttpClient) {  this.loadCartItems();}
  addToCart(product: Product) { //here the Product specifies the datatype of variables that mentioned in Product Interface
    let itemIndex = this.items.findIndex((item) => item.name === product.name);
    if (itemIndex !== -1) {
      this.items[itemIndex].quantity += product.quantity;
    }else{
      this.items.push(product); // push->push the item to cart
    }
    this.cartItemCount.next(this.cartItemCount.value + 1); // next->data is passed where ever subscribed
    this.updateCartItemCount();
    this.saveCartItems();

  }


  getCartCount() {
    return this.cartItemCount.asObservable();
  }
  removeFromCart(product: Product) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
      this.cartItemCount.next(this.items.length);
      this.updateCartItemCount();
      this.saveCartItems();
    }
  }
  getItems() {
    return this.items;
  }
  isProductInCart(product: Product): boolean {
    return this.items.some((item) => item.name === product.name);
  }

  emptyCart() {
    this.items = [];
    this.cartItemCount.next(0);
    this.updateCartItemCount();
    this.saveCartItems();
    return this.items;
  }
  clearCart() {
    this.items = [];
    this.cartItemCount.next(0);
    this.saveCartItems();
  }
  private updateCartItemCount() {
    this.cartItemCount.next(this.items.length);
  }

  private saveCartItems() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }

  private loadCartItems() {
    const storedItems = localStorage.getItem(this.storageKey);
    if (storedItems) {
      this.items = JSON.parse(storedItems);
      this.updateCartItemCount();
    }
  }

  //newly added
  updateQuantity(product: any, quantity: number) {
    // product.quantity = quantity;
    // 07.6
    const existingProduct = this.items.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = quantity;
    }
  }
}
