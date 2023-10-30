import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product';
import { CartService } from './cart.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  editProductData: any = '';
  editProductID: any;

  constructor(private http: HttpClient,private cartService:CartService) {}
  private productUrl = environment.getProductDetail;
  private orderUrl = environment.gerOrderDetail;
  getProducts(): Observable<any[]> {
    // return this.http.get("http://localhost:3000/products");
    return this.http.get<any[]>(this.productUrl);
  }
  addProducts(body: any) {
    return this.http.post(this.productUrl, body);
  }
  deleteProduct(id: any) {
    return this.http.delete(this.productUrl + '/' + id);
  }
  deleteOrder(id:any){
    return this.http.delete(this.orderUrl + '/' + id);
  }
  getSingleProduct(id:string){
    return this.http.get<Product>(this.productUrl + '/' + id);
  }

  updateProduct(Product: Product) {
    return this.http.put<Product>(this.productUrl+'/' +Product.id,Product);
  }
  saveOrder(body: any): Observable<any> {

    // Send a POST request to the server to save the order
    return this.http.post(this.orderUrl, body);
  }
  saveCart(body: any):Observable<any>{
    return this.http.post(environment.getCartDetail,body);
  }
  getOrder():Observable<any[]>{
    return this.http.get<any[]>(this.orderUrl);
  }


// local add to cart
getOrderList(){
  let user =localStorage.getItem('currentUser');
    let userData=user && JSON.parse(user);
  return this.http.get<any>(`environment.getCartDetail?emailId=`+userData.email);
}


}
