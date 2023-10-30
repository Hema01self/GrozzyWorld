import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-Quries',
  templateUrl: './Quries.component.html',
  styleUrls: ['./Quries.component.css'],
})
export class QuriesComponent implements OnInit {
  queries: any[] = [];
  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getContactInfo().subscribe((queries) => {
      this.queries = queries;
    });
  }
}
