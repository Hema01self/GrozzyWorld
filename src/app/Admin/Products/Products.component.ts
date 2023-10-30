import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/product-api.service';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {
products:any=[];
editProductData:any="";
  constructor( private formBuilder: FormBuilder,private productApiService:ProductApiService,private route:Router) {
    this.productApiService.getProducts().subscribe(product=>this.products=product);
   }

  ngOnInit() {

  }
  removeProduct(id: any){
    let result=confirm("Are you sure want to remove");
    if (result){
      this.productApiService.deleteProduct(id).subscribe((data)=>{
        alert("Removed successfully");
        console.log('Product removed from db')
      });
      this.productApiService.getProducts().subscribe(product=>this.products=product);
    }
  }


  addProduct(product:any,productID:any){
    this.productApiService.editProductData=product;
    this.productApiService.editProductID=productID;
    this.route.navigate(['/admin/updateProduct'])
  }

}
