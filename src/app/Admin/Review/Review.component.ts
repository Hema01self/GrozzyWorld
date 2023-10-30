import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/product-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Review',
  templateUrl: './Review.component.html',
  styleUrls: ['./Review.component.css'],
})
export class ReviewComponent implements OnInit {
  message: any = '';
  orders: any[] = [];

  constructor(
    private http: HttpClient,
    private productApiService: ProductApiService
  ) {}

  ngOnInit() {
    this.productApiService.getOrder().subscribe((response) => {
      this.orders = response;
    });
  }
  // feedback
  ReviewForm(id: number) {
    this.http
      .patch(environment.gerOrderDetail + '/' + id, { feedback: this.message })
      .subscribe(() => {
        console.log('Feedback submitted');
      });
  }
}
