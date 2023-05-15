import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductApiService } from 'src/app/product-api.service';

@Component({
  selector: 'app-Categories',
  templateUrl: './Categories.component.html',
  styleUrls: ['./Categories.component.css']
})
export class CategoriesComponent implements OnInit {
  products: Product[] = [];

  public filterCategory: any;
  constructor( private service: ProductApiService) {
   }

  ngOnInit() {
    this.service.getProducts().subscribe((products) => {
      this.products = products;
      this.filterCategory = products;
    });


  }
filter(category: string){
  this.filterCategory = this.products.filter((a: any) => {
    if (a.category == category || category == '') {
      return a;
    }
  });
}
}
