import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private client:HttpClient) { }
userLogin:boolean=false;
activeuser:any="";
private contactUrl="http://localhost:3000/contact-info";
private userUrl="http://localhost:3000/users";
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
}
