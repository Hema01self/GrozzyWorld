import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductApiService } from 'src/app/product-api.service';


@Component({
  selector: 'app-EditProduct',
  templateUrl: './EditProduct.component.html',
  styleUrls: ['./EditProduct.component.css']
})
export class EditProductComponent implements OnInit {
  productMessage: undefined | string;
  productData: undefined | Product;
  constructor(
    private productApiService: ProductApiService,private route:ActivatedRoute) { }


  ngOnInit():void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);
    productId && this.productApiService.getSingleProduct(productId).subscribe((data)=>{
      console.log(data);
      this.productData=data;
    })
  }
submit(data:any){

if(this.productData){
  data.id=this.productData.id;
}
this.productApiService.updateProduct(data).subscribe((result)=>{
  if(result){
    this.productMessage='Product has updated';
  }
});
setTimeout(() => {
  this.productMessage =undefined;
}, 3000);
console.log(data);
}
}
