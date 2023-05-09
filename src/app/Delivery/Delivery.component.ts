import { Component, OnInit, TemplateRef } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Delivery',
  templateUrl: './Delivery.component.html',
  styleUrls: ['./Delivery.component.css']
})
export class DeliveryComponent implements OnInit {
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
    constructor(private cartService:CartService,private authService:AuthService,private route:Router) { }
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
  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref);
  }
  alert(){
    alert('Your Order is placed');
    this.route.navigate(['/home']);
  }

}
