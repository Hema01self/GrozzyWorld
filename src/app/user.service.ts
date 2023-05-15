import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private client:HttpClient) { }
userLogin:boolean=false;
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
return this.client.post<User>(dbUrl,user);
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
