import { Component, OnInit, TemplateRef } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductApiService } from '../product-api.service';
@Component({
  selector: 'app-Delivery',
  templateUrl: './Delivery.component.html',
  styleUrls: ['./Delivery.component.css'],
})
export class DeliveryComponent implements OnInit {
  orderDetails: any[] = [];
  status: boolean = false;
  products: any = [];
  cartItems: any;
  deliveryForm: FormGroup;
  fname: any = '';
  lname: any = '';
  phone: any = '';
  houseno: any = '';
  aparment: any = '';
  strdetails: any = '';
  landmark: any = '';
  city: any = '';
  pcode: any = '';
  emailid: any = '';
  password: any = '';
  dialog: any;

  constructor(
    private cartService: CartService,
    private route: Router,
    private formBuilder: FormBuilder,
    private productApiService: ProductApiService,
    private router: ActivatedRoute
  ) {
    this.deliveryForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiry: [
        '',
        [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)],
      ],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
    });
    this.productApiService
      .getProducts()
      .subscribe((product) => (this.products = product));
    this.cartItems = this.cartService.getItems();
  }
  cartValue: any = '';
  ngOnInit() {}
  getGrandTotal() {
    let grandTotal = 0;
    this.cartService.getItems().forEach((item) => {
      grandTotal += item.price * 0.5 * item.quantity;
    });
    return grandTotal;
  }

  alert() {
    if (this.deliveryForm.valid) {
      alert('Payment successful!');
      this.cartService.emptyCart();
      this.cartItems = [];
      this.route.navigate(['/my-order']);
    }
  }
  Cash(){
    alert('Your order received!');
    this.cartService.emptyCart();
      this.cartItems = [];
      this.route.navigate(['/my-order']);
  }
  //29.06
}
