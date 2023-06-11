import { Component, OnInit, TemplateRef } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-Delivery',
  templateUrl: './Delivery.component.html',
  styleUrls: ['./Delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  deliveryForm: FormGroup;
  fname:any="";
  lname:any="";
  phone:any="";
  houseno:any="";
  aparment:any="";
  strdetails:any="";
  landmark:any="";
  city:any="";
  pcode:any="";
  emailid: any = '';
  password: any = '';
  dialog: any;
    constructor(private cartService:CartService,private authService:AuthService,private route:Router,private formBuilder: FormBuilder) {
      this.deliveryForm = this.formBuilder.group({
        cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
        expiry: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
        cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
      });
    }
cartValue:any="";
  ngOnInit() {
  }
  getGrandTotal() {
    let grandTotal = 0;
    this.cartService.getItems().forEach((item) => {
      grandTotal += item.price * item.quantity;
    });
    return grandTotal;
  }

  alert(){
    if (this.deliveryForm.valid) {
    alert('Payment successful!');
    this.route.navigate(['/home']);}
  }

}
