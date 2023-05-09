import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../User';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent {
  emailid: any = '';
  password: any = '';
  isLoggedIn = false;
  errorMessage!: string;
  userType:any="";
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private route: Router,
    private userService:UserService
  ) {}

  logout(): void {

        this.isLoggedIn = false;
        this.userService.userLogin=this.isLoggedIn;
        console.log(this.isLoggedIn);

  }
  loginstatus(){
    console.log(this.isLoggedIn);
  }

  onLogin():void{

    this.authService.login(this.emailid,this.password,'user').subscribe(
      result => {
        if(result){
          this.isLoggedIn=true;
          this.route.navigate(['\home']);
          alert('Logged In Successfully');

          console.log('login status in login.ts '+ this.isLoggedIn);
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
        console.log('login status in login.ts '+ this.isLoggedIn)
        alert('User Credentials are mismatch')
      }
    );

    this.authService.login(this.emailid,this.password,'admin').subscribe(
      result => {
        if(result){
          this.isLoggedIn=true;
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

  //
  login(emailid :string,password :string,userType:string){
    if(userType=='user'){
      this.authService.getUserCredentials().subscribe(
        response =>{
          const user =response.users.find((u: { email: any; pword: string; }) =>u.email === emailid && u.pword === password);
          if(user){
            console.log('User login successfull');
          }
          else{
            console.log('Invalid');
          }
        }
         );

    }
    else if(userType='admin'){
this.authService.getAdminCredentials().subscribe(
  response =>{
    const admin = response.admins.find((a: { email: any; pword: string; })=>a.email === emailid && a.pword ===password);
    if(admin){
      console.log('admin successfull');
    }
    else{
      console.log('invalid');
    }
  }
);
    }
  }


}
