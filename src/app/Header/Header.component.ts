import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn!: boolean;
  public totalItem:number=0;
  public usercount:number=0;
  users:any=[];
  constructor(private userService:UserService,private cartService:CartService,public authService:AuthService,private route:Router){
    this.userService.getCurrentUser().subscribe(user=>this.users=user);
  }
  // loginStatus=this.userService.userLogin;

  ngOnInit(): void{
    this.cartService.getCartCount().subscribe((total)=>{
      this.totalItem=total;
    });

    this.userService.getUserCount().subscribe((usertotal)=>{
      this.usercount=usertotal;
    });

  }
  logout(): void {
    this.authService.isLoggedIn = false;
    this.authService.loggedIn.next(false);
    this.route.navigate(['/login']);
  }
  removeUser(id: any){
    let result=confirm("Are you sure want to logout");
    if (result){
      this.userService.removeCurrentUser(id).subscribe((data)=>{
        alert("Successfully logged out");
      });
    }
  }

}




