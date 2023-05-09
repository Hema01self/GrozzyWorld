import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-Customers',
  templateUrl: './Customers.component.html',
  styleUrls: ['./Customers.component.css']
})
export class CustomersComponent implements OnInit {
users:any=[];
  constructor(private userService:UserService) {
    this.userService.getUserInfo().subscribe((user=>this.users=user));

  }

  ngOnInit() {
  }

}
