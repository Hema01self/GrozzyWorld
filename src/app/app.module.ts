import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './About/About.component';
import { ContactComponent } from './Contact/Contact.component';

import { CartComponent } from './Cart/Cart.component';
import { ProductListComponent } from './ProductList/ProductList.component';
import { AuthService } from './auth.service';
import { DeliveryComponent } from './Delivery/Delivery.component';

import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/Header.component';
import { AdminModule } from './Admin/Admin.module';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { ProductDetailComponent } from './productDetail/productDetail.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailComponent } from './Order-detail/Order-detail.component';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      AboutComponent,
      ContactComponent,
      CartComponent,
      ProductListComponent,
      DeliveryComponent,

      FooterComponent,
      HeaderComponent,
      NotFoundComponent,
      ProductDetailComponent,
      MyOrdersComponent,
      OrderDetailComponent,
      ForgotPasswordComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,AdminModule,LoggerModule.forRoot({
      serverLoggingUrl:'',
      level:NgxLoggerLevel.DEBUG,
      serverLogLevel:NgxLoggerLevel.ERROR
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
