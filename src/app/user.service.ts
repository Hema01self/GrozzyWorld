import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from './User';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private client:HttpClient) { }

userCount = new BehaviorSubject(0);
private contactUrl=environment.getContactInfo;
private userUrl=environment.getUserDetail;
private adminUrl=environment.getAdminDetail;
addUserInfo(body:any){
  return this.client.post(this.userUrl,body);
  }
addContactInfo(body:any){
  return this.client.post(this.contactUrl,body);
 }
getContactInfo():Observable<any[]>{
  return this.client.get<any[]>(this.contactUrl);
}
getUserInfo():Observable<any[]>{
  return this.client.get<any[]>(this.userUrl);
}
getAdminInfo():Observable<any[]>{
  return this.client.get<any[]>(this.adminUrl);
}
currentUser(user: User): Observable<User>{
const dbUrl=environment.getCurrentUser;
this.userCount.next(this.userCount.value + 1);
return this.client.post<User>(dbUrl,user).pipe(
  tap((loggedInUser: User) => {
    // Store the user information in local storage
    localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
  })
);
}
 currentAdmin(admin:User): Observable<User>{
  const adminUrl=this.adminUrl;
   return this.client.post<User>(adminUrl,admin).pipe(
    tap((loggedInUser: User) => {
      localStorage.setItem('currentAdmin', JSON.stringify(loggedInUser));
    })
   )
 }
getUserCount(){
  return this.userCount.asObservable();
}
removeCurrentUser(id: any){
  this.userCount.next(this.userCount.value - 1);
  return this.client.delete(this.currentUser + '/' + id)
}
getCurrentUser():Observable<any[]>{
  return this.client.get<any[]>(environment.getCurrentUser);
}
}
