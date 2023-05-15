import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  editProductData: any = '';
  editProductID: any;
  constructor(private http: HttpClient,private cartService:CartService) {}
  private productUrl = 'http://localhost:3000/products';
  private orderUrl = 'http://localhost:3000/order';
  getProducts(): Observable<any[]> {
    // return this.http.get("http://localhost:3000/products");
    return this.http.get<any[]>(this.productUrl);
  }
  addProducts(body: any) {
    return this.http.post('http://localhost:3000/products', body);
  }
  deleteProduct(id: any) {
    return this.http.delete('http://localhost:3000/products' + '/' + id);
  }
  getSingleProduct(id:string){
    return this.http.get<Product>('http://localhost:3000/products' + '/' + id);
  }

  updateProduct(Product: Product) {
    return this.http.put<Product>('http://localhost:3000/products'+'/' +Product.id,Product);
  }
  saveOrder(body: any): Observable<any> {
    // Perform any necessary processing or validation before saving the order

    // Send a POST request to the server to save the order
    return this.http.post('http://localhost:3000/order', body);
  }
  getOrder():Observable<any[]>{
    return this.http.get<any[]>(this.orderUrl);
  }
}
