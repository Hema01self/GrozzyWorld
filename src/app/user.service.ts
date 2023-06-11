import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private client:HttpClient) { }

userCount = new BehaviorSubject(0);
private contactUrl="http://localhost:3000/contact-info";
private userUrl="http://localhost:3000/users";
private adminUrl="http://localhost:3000/admin";
addUserInfo(body:any){
  return this.client.post("http://localhost:3000/users",body);
  }
addContactInfo(body:any){
  return this.client.post("http://localhost:3000/contact-info",body);
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
const dbUrl='http://localhost:3000/current-user';
this.userCount.next(this.userCount.value + 1);
return this.client.post<User>(dbUrl,user).pipe(
  tap((loggedInUser: User) => {
    // Store the user information in local storage
    localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
  })
);
}
 currentAdmin(admin:User): Observable<User>{
  const adminUrl="http://localhost:3000/admin";
   return this.client.post<User>(adminUrl,admin).pipe(
    tap((loggedInUser: User) => {
      localStorage.setItem('currentAdmin', JSON.stringify(loggedInUser));
    })
   )
 }
getUserCount(){
  return this.userCount.asObservable();;
}
removeCurrentUser(id: any){
  this.userCount.next(this.userCount.value - 1);
  return this.client.delete('http://localhost:3000/current-user' + '/' + id)
}
getCurrentUser():Observable<any[]>{
  return this.client.get<any[]>('http://localhost:3000/current-user');
}
}
