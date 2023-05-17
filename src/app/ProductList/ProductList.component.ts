import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../Product';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ProductApiService } from '../product-api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ProductList',
  templateUrl: './ProductList.component.html',
  styleUrls: ['./ProductList.component.css'],
})
export class ProductListComponent implements OnInit {

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
    // this.isLoggedIn =authService.isLoggedIn;
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
    // this.isLoggedIn = this.authService.isLoggedIn;
    // console.log('login status in productlist.ts ' + this.isLoggedIn);
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
    alert('Please login to Add to cart');
    this.route.navigate(['/login']);
  }

  //
}
