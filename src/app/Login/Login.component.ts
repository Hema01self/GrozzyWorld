import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../User';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent {
  emailid: any = '';
  password: any = '';
  errorMessage!: string;
  userType:any="";
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private route: Router,
    private userService:UserService
  ) {}



  onLogin():void{

    this.authService.login(this.emailid,this.password,'user').subscribe(
      result => {
        if(result){
          const user: any ={
            email: this.emailid,
            pword: this.password,
            userType: 'user'
          };
          this.userService.currentUser(user).subscribe(
            (savedUser: any)=>{
              console.log('user saved ',savedUser);
            },
            (error: any) => {
              console.error('An error occurred while saving user data:', error);
            }
          );

          this.route.navigate(['\home']);
          alert('Logged In Successfully');
          console.log('username: '+this.emailid);
          console.log('pwd: '+this.password);
          console.log('login.ts matched')
        }
        else{
          // this.errorMessage='invalid uname or pword';
          // console.log('invalid');
          // alert('invalid');
        }
      },
      (error)=>{
        console.log(error);
        this.errorMessage='An error occurred while logging';
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
        }
      },
      (error)=>{
        console.log(error);
        alert('admin credentials are mismatch');
      }
    );
  }

}
