import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { ProductApiService } from 'src/app/product-api.service';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:any[]=[];
  admins:any[]=[];
  queries:any[]=[];
  products:any[]=[];
  UserCount=0;
  constructor(private userService:UserService,private route:Router,private productApiService:ProductApiService) { }

  ngOnInit() {
    this.userService.getUserInfo().subscribe((users)=>{
      this.users=users;
    });
    this.userService.getAdminInfo().subscribe((admins)=>{
      this.admins=admins;
    });
    this.userService.getContactInfo().subscribe((queries)=>{
      this.queries=queries;
    });
    this.productApiService.getProducts().subscribe((products)=>{
      this.products=products;
    })
  }

}
