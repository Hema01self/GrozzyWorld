import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orderDetails:any=[];
  orders:any=[];
  status:boolean=false;
  orderPlacementTime!: Date;
  remainingTime!: number;

  message!:string;
  constructor(private cartService:CartService,private http:HttpClient) { }

  ngOnInit() {
    this.getOrderList();
    this.orderPlacementTime = new Date(); // Record the order placement time
      this.startCountdownTimer();
  }



  startCountdownTimer() {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const elapsedTime = currentTime.getTime() - this.orderPlacementTime.getTime();
      this.remainingTime =2*60*1000 - elapsedTime; // Convert to milliseconds

      if (this.remainingTime <= 0) {
        clearInterval(interval);


      }
    }, 1000); // Update timer every second
  }
  getFormattedTime() {
    const minutes = Math.max(Math.floor(this.remainingTime / 60000), 0); // Convert remaining time to minutes, ensuring a minimum of 0
    const seconds = Math.max(Math.floor((this.remainingTime % 60000) / 1000), 0); // Convert remaining time to seconds, ensuring a minimum of 0
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

getOrderList(){

  this.cartService.OrderList().subscribe((result)=>{
 this.orderDetails=result;
 console.log("order"+this.orderDetails);
 if(result==0){
   this.status =! this.status} })
}

// this method removed
 removeOrder(id:any){
  let result=confirm("Are you sure want to cancel");
  if (result){
    window.location.reload();
    this.cartService.cancelOrder(id).subscribe((data)=>{
      alert("Removed successfully");

    });
    this.cartService.OrderList().subscribe(order=>this.orders=order);
  }
}

// updated cancel
cancelOrder(id:number){
    this.http.patch(environment.gerOrderDetail+ '/' + id,{userstatus:'Cancelled'}).subscribe(()=>{
    this.cartService.OrderList().subscribe(order=>this.orders=order);
    console.log('user cancelled');


})
}


}
