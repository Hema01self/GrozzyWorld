import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

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




