import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../product-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.css']
})
export class ProductDetailComponent implements OnInit {
productData: any|Product;
productMessage: undefined | string;

  constructor(private productApiService:ProductApiService,private route: ActivatedRoute,private router:Router ) { }

  ngOnInit():void {
 let productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);
    productId && this.productApiService.getSingleProduct(productId).subscribe((data)=>{
      console.log(data);
      this.productData=data;
    })
  }


}
