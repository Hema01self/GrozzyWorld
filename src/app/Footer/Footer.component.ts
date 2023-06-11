import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-Footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.css']
})
export class FooterComponent implements OnInit {
  email:any="";
    constructor() {

  }

  ngOnInit() {

  }
  onSubmit(){
    var body={
      emailid:this.email
    }
    localStorage.setItem('Newsletter',JSON.stringify(body));
  }


  }


