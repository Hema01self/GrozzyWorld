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

  public totalItem:number=0;
  public usercount:number=0;
  users:any=[];
  user:any=[];
  constructor(private userService:UserService,private cartService:CartService,public authService:AuthService,public route:Router){
    this.userService.getCurrentUser().subscribe(user=>this.users=user);
  }


  ngOnInit(): void{
    this.cartService.getCartCount().subscribe((total)=>{
      this.totalItem=total;
    });

    this.userService.getUserCount().subscribe((usertotal)=>{
      this.usercount=usertotal;
    });
    this.userService.getUserInfo().subscribe((user)=>{
      this.user=user;
    });
      // Check if a user is stored in local storage
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    this.user = JSON.parse(storedUser);
    this.usercount = 1;
  }
  }

  removeUser(id: any){
    let result=confirm("Are you sure want to logout");
    if (result){
      this.userService.removeCurrentUser(id).subscribe((data)=>{
        alert("Successfully logged out");
        this.route.navigate(['\login']);
      });
    }
  }
logout(){
  const result = confirm("Are you sure you want to logout?");
  if (result) {
    this.userService.removeCurrentUser(this.user[0].id).subscribe(() => {
      // alert("Successfully logged out");
      this.usercount = 0;
      localStorage.removeItem('currentUser');
      this.cartService.clearCart();
      this.route.navigate(['/login']);
    });
  }
}

isLoggedIn(): boolean {
  // Check if a user is stored in local storage or if the user array has any elements
  return (localStorage.getItem('currentUser') !== null || this.user.length > 0);
}
}

