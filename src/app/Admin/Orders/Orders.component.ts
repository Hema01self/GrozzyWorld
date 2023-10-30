import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { CartService } from 'src/app/cart.service';
import { ProductApiService } from 'src/app/product-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Orders',
  templateUrl: './Orders.component.html',
  styleUrls: ['./Orders.component.css'],
})
export class OrdersComponent implements OnInit {
  message: any = '';
  cartItems: any = [];
  items: Product[] = [];
  orders: any[] = [];
  private getOrderDetail = environment.gerOrderDetail;
  constructor(
    private cartService: CartService,
    private productApiService: ProductApiService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.productApiService.getOrder().subscribe((response) => {
      this.orders = response;
    });
  }


  // admin cancel
  fetchOrders() {
    this.http.get<any[]>(this.getOrderDetail).subscribe((data) => {
      this.orders = data;
    });
  }
  cancelOrder(id: number) {
    this.http
      .patch(this.getOrderDetail + '/' + id, { adminstatus: 'Cancelled' })
      .subscribe(() => {
        this.fetchOrders();
        console.log('admin cancelled');
      });
  }
  approveOrder(id: number) {
    this.http
      .patch(this.getOrderDetail + '/' + id, { adminstatus: 'Approved' })
      .subscribe(() => {
        this.fetchOrders();
        console.log('admin Approved');
      });
  }

  // feedback
  ReviewForm(id: number) {
    this.http
      .patch(this.getOrderDetail + '/' + id, { feedback: this.message })
      .subscribe(() => {
        console.log('Feedback submitted');
      });
  }
}
