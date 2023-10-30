import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../Product';
import { ProductApiService } from '../product-api.service';
import { UserService } from '../user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItemCount: number;
  cartItems: any;
  items: Product[] = [];
  CartData: any;
  // offer
  offerPrice!: number;
  // offer

  constructor(
    private cartService: CartService,
    private productApiService: ProductApiService,
    private userService: UserService
  ) {
    this.cartItemCount = this.cartService.cartItemCount.value;
    this.cartItems = this.cartService.getItems();
  }

  ngOnInit(): void {
    this.cartService.cartItemCount.subscribe((count) => {
      this.cartItemCount = count;

      // offer
      this.cartItems.forEach((product: Product) => {
        this.calculateOfferPrice(product);
      });
      this.scheduleRevertToOriginalPrice();
      // offer
    });

    // 29.06
  }
  // 29.06
  getDate(): string {
    const todayDate = new Date();

    const year = todayDate.getFullYear();
    const month = String(todayDate.getMonth() + 1).padStart(2, '0'); // 0-indexed January is 0+1
    const day = String(todayDate.getDate()).padStart(2, '0');
    const hours = String(todayDate.getHours()).padStart(2, '0');
    const minutes = String(todayDate.getMinutes()).padStart(2, '0');
    const seconds = String(todayDate.getSeconds()).padStart(2, '0');

    return `Date: ${month}/${day}/${year} Time: ${hours}:${minutes}`;
  }

  getOfferGrandTotal() {
    let grandTotal = 0;
    this.cartService.getItems().forEach((item) => {
      grandTotal += item.price * item.quantity * 0.5;
      // 0.5 multiplied for 50% offer
    });
    return grandTotal;
  }
  getGrandTotal() {
    let grandTotal = 0;
    this.cartService.getItems().forEach((item) => {
      grandTotal += item.price * item.quantity;
    
    });
    return grandTotal;
  }

  emptyCart() {
    this.cartService.emptyCart();
    this.cartItems = [];
  }
  confirmClearCart() {
    if (confirm('Are you sure want to clear the cart?')) {
      this.emptyCart();
    }
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
  }

  // 28/06
  newCheck() {
    let user = localStorage.getItem('currentUser');
    let userEmail = user && JSON.parse(user).email;
    let orderDetails = {
      emailId: userEmail,
      total: this.getOfferGrandTotal(),
      date: this.getDate(),
      userstatus: environment.userStatus,
      adminstatus: environment.adminStatus,
      review: environment.review,
      feedback: environment.feedback,
      Menu_details: this.cartItems,
    };
    this.productApiService.saveOrder(orderDetails).subscribe((result) => {
      if (result) {
        console.log('saved new success');
      }
    });
  }

  updateQuantity(product: Product, quantity: number) {
    this.cartService.updateQuantity(product, quantity);
  }

  // offer
  calculateOfferPrice(product: Product) {
    product.offerPrice = product.price * 0.5; // 50% off
  }
  scheduleRevertToOriginalPrice() {
    setTimeout(() => {
      this.cartItems.forEach((product: { offerPrice: undefined }) => {
        product.offerPrice = undefined;
      });
    }, 1800000); // Revert to original price after 30 minutes (30 minutes = 1800000 milliseconds)
  }
  // offer end
}
