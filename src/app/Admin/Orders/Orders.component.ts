import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { CartService } from 'src/app/cart.service';
import { ProductApiService } from 'src/app/product-api.service';

@Component({
  selector: 'app-Orders',
  templateUrl: './Orders.component.html',
  styleUrls: ['./Orders.component.css']
})
export class OrdersComponent implements OnInit {

  cartItems:any = [];
  items: Product[]=[];
  orders:any[]=[];
  constructor(private cartService: CartService,private productApiService:ProductApiService) {
// this.productApiService.getOrder().subscribe((orders)=>{this.orders=orders[0]})
  }

  ngOnInit() {
this.productApiService.getOrder().subscribe((response)=>{
  this.orders =response;
});

  }
  getGrandTotal(){
    let grandTotal=0;
    this.cartService.getItems().forEach((item)=>{
      grandTotal+=item.price*item.quantity;
    });
    return grandTotal;
  }
}
