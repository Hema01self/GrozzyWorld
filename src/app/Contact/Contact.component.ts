import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css']
})
export class ContactComponent implements OnInit {

username:any="";

contactno:any="";
email:any="";
subject:any="";
message:any="";
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  ContactForm(){
     var body={
      uname:this.username,
      mobileno:this.contactno,
      emailid:this.email,
      sub:this.subject,
      msg:this.message
     }
     this.userService.addContactInfo(body).subscribe(data=>{
      alert("Your details are submitted");
     })
  }

}
