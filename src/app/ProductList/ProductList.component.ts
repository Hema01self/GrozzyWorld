import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../Product';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';
import { ProductApiService } from '../product-api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ProductList',
  templateUrl: './ProductList.component.html',
  styleUrls: ['./ProductList.component.css'],
})
export class ProductListComponent implements OnInit {
  user:any=[];
  products: Product[] = [];
  cart: Product[] = [];
  public filterCategory: any;
  public totalItem: number = 0;
  public usercount:number=0;
  users:any=[];


  constructor(
    public cartService: CartService,
    private authService: AuthService,
    private route: Router,
    private service: ProductApiService,
    private userService:UserService
  ) {
    this.cart = this.cartService.getItems();
    this.userService.getCurrentUser().subscribe(user=>this.users=user);
  }
  ngOnInit(): void {
    this.service.getProducts().subscribe((products) => {
      this.products = products;
      this.filterCategory = products;
    });
    this.cartService.getCartCount().subscribe((total) => {
      this.totalItem = total;
    });
    this.userService.getUserCount().subscribe((usertotal)=>{
      this.usercount=usertotal;
    });
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.usercount = 1;
    }

    }

  addToCart(product: Product) {
    if (this.cartService.isProductInCart(product)) {
      window.alert('Product already added to cart');
    } else{
      this.cartService.addToCart(product);
      window.alert('Added to cart');
      console.log(product);
      product.disabled = true;

       }
  }
  getGrandTotal() {
    let grandTotal = 0;
    this.cartService.getItems().forEach((item) => {
      grandTotal += item.price * item.quantity;
    });
    return grandTotal;
  }

  filter(category: string) {
    this.filterCategory = this.products.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }

  alertUser() {
    alert('Please login to add products');
    this.route.navigate(['/login']);
  }



}
