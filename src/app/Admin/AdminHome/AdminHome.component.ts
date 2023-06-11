import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AdminHome',
  templateUrl: './AdminHome.component.html',
  styleUrls: ['./AdminHome.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  logout(){
    const result = confirm("Are you sure you want to logout?");
    if (result) {
      localStorage.removeItem('currentAdmin');
      this.route.navigate(['/home']);
    }
  }
}
