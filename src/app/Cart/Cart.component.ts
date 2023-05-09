import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../Product';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {
  cartItemCount: number;
  cartItems:any = [];
  items: Product[]=[];
  constructor(private cartService: CartService) {
    this.cartItemCount = this.cartService.cartItemCount.value;
    this.cartItems=this.cartService.getItems();
  }

  ngOnInit():void {
    this.cartService.cartItemCount.subscribe((count)=>{
      this.cartItemCount=count;
    });
  }
  getGrandTotal(){
    let grandTotal=0;
    this.cartService.getItems().forEach((item)=>{
      grandTotal+=item.price*item.quantity;
    });
    return grandTotal;
  }
  deleteItem(itemIndex:number){
    this.cartItems.splice(itemIndex,1);
  }

  emptyCart(){
    this.cartService.emptyCart();
this.cartItems=[];
  }
confirmClearCart(){
  if(confirm('Are you sure want to clear the cart?')){
    this.emptyCart();
  }

}

  removeFromCart(product:any){
    this.cartService.removeFromCart(product);

  }
}