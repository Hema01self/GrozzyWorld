import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/product-api.service';


@Component({
  selector: 'app-updateProduct',
  templateUrl: './updateProduct.component.html',
  styleUrls: ['./updateProduct.component.css'],
})
export class UpdateProductComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private productApiService: ProductApiService,private route:Router) {}
  productForm = this.fb.group({
    proId:['',[Validators.required]],
    proName:['',[Validators.required]],
    proPrice:['',[Validators.required]],
    proQuantity:['',[Validators.required]],
    proDisable:['',[Validators.required]],
    proImage:['',[Validators.required]],
    proDetail:['',[Validators.required]],
    proWeight:['',[Validators.required]],
    proRating:['',[Validators.required]],
    proCategory:['',[Validators.required]],
  },
  );
  proId:any = '';
  proName:any = '';
  proPrice: any = '';
  proQuantity: any = '';
  proDisable:any='';
  proImage: any = '';
  proDetail: any = '';
  proWeight: any = '';
  proRating: any = '';
  proCategory: any = '';
  ngOnInit() {}
  submitForm() {
    var body = {
      id: this.proId,
      name: this.proName,
      price: this.proPrice,
      quantity: this.proQuantity,
      disabled: this.proDisable,
      image: this.proImage,
      detail: this.proDetail,
      weight: this.proWeight,
      rating: this.proRating,
      category: this.proCategory
    };
    this.productApiService.addProducts(body).subscribe((data) => {
      alert('Product was added');
      console.log(body);

      this.route.navigate(['/admin/products']);
    });
  }
}
