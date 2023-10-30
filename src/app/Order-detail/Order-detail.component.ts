import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../Cart/Cart.component';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Order-detail',
  templateUrl: './Order-detail.component.html',
  styleUrls: ['./Order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderData:any;
  message:any="";
  constructor(private cartService:CartService,private route: ActivatedRoute,private router:Router,private http:HttpClient) { }

  ngOnInit() {
    let orderid = this.route.snapshot.paramMap.get('check');
    orderid && this.cartService.getDetailedOrder(orderid).subscribe((result)=>{
      console.log(result);
      this.orderData=result;
    })
  }
 ReviewForm(id:number){
    this.http.patch(environment.gerOrderDetail + '/' + id,{review:this.message}).subscribe(()=>{
      console.log('review submitted');
    })
 }


}
