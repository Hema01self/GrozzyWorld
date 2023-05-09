import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Grozzy_Pro';
  isLoggedIn!: boolean;
  public totalItem:number=0;
  constructor(private userService:UserService,private cartService:CartService,private authService:AuthService){}
  // loginStatus=this.userService.userLogin;

  ngOnInit(): void{
    this.cartService.getCartCount().subscribe((total)=>{
      this.totalItem=total;
    });



  }

}
