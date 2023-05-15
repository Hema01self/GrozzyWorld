import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { User } from './User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userUrl='http://localhost:3000/users';
  private adminUrl='http://localhost:3000/admin';
  isLoggedIn = false;
public loggedIn: BehaviorSubject<boolean> =new BehaviorSubject<boolean>(false);
public isLoggedIn$: Observable<boolean> = this.loggedIn.asObservable();
  constructor(private http: HttpClient, private route: Router) {}
  login(username: string, password: string, userType: 'user' | 'admin') {
    const dbUrl = userType === 'user' ? this.userUrl:this.adminUrl;
    return this.http.get<any[]>(dbUrl).pipe(
      tap((users) => {
        const user = users.find((u) => u.email === username && u.pword === password);

        if (user) {
           this.isLoggedIn=true;
           this.loggedIn.next(true);
         console.log(user.email);
          console.log(user.pword);
          console.log("credentials are match");
          console.log('login status in auth service '+this.isLoggedIn);
        }

        else {
          this.isLoggedIn=false;
          this.loggedIn.next(false);
          console.log(user.email);
          console.log(user.pword);
          console.log("credentials are not match");
          console.log('login status in auth service' +this.isLoggedIn);
          alert('false');
        }
      })
    );
  }


  getUserCredentials(){
    return this.http.get<any>(this.userUrl);
  }
  getAdminCredentials(){
    return this.http.get<any>(this.adminUrl);
  }

  isLoggedInStatus(): boolean {
    console.log('login status in auth service in isLoggedIn()' +this.isLoggedIn);
    return this.isLoggedIn;
  }
}
