import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../User';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { switchMap } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit{
  emailid: any = '';
  password: any = '';
  errorMessage!: string;
  userType:any="";
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private route: Router,
    private userService:UserService,
    private cartService:CartService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {

  }



  onLogin():void{

    this.authService.login(this.emailid,this.password,'user').subscribe(
      result => {
        if(result){
          const user: any ={
            email: this.emailid,
            pword: this.password,
            userType: 'user'
          };
          const retUrl = this.activatedRoute.snapshot.queryParams['retUrl'];
          if(retUrl){
            this.route.navigateByUrl(retUrl);
          }
          else{
            alert('Logged In Successfully');
            this.route.navigate(['/home']);
          }
          this.userService.currentUser(user).subscribe(
            (savedUser: any)=>{
              console.log('user saved ',savedUser);
            },
            (error: any) => {
              console.error('An error occurred while saving user data:', error);
            }
          );

          setTimeout(function(){
            window.location.reload();

          },100);



          const pendingCartItem = localStorage.getItem('pendingCart');
          if (pendingCartItem) {
            const productToAdd = JSON.parse(pendingCartItem);
            this.cartService.addToCart(productToAdd);
            localStorage.removeItem('pendingCart');
          }
          console.log('username: '+this.emailid);
          console.log('pwd: '+this.password);
          console.log('login.ts matched')

        }

      },
      (error)=>{
        console.log(error);

         alert('User Credentials are mismatch')
      }
    );

    this.authService.login(this.emailid,this.password,'admin').subscribe(
      result => {
        if(result){
          this.route.navigate(['admin/dashboard']);
          console.log('admin uname' +this.emailid );
          console.log('admin uname' +this.password);
          alert('Admin loggedin successfully');
          localStorage.setItem('currentAdmin', JSON.stringify(result));
        }
      },
      (error)=>{
        console.log(error);
        // alert('admin credentials are mismatch');
      }
    );
  }

}
