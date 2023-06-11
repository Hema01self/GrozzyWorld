import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './Admin.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './AdminHome/AdminHome.component';
import { ProductsComponent } from './Products/Products.component';
import { CategoriesComponent } from './Categories/Categories.component';
import { OrdersComponent } from './Orders/Orders.component';
import { CustomersComponent } from './Customers/Customers.component';
import { QuriesComponent } from './Quries/Quries.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './updateProduct/updateProduct.component';
import { EditProductComponent } from './EditProduct/EditProduct.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminHomeComponent,
    ProductsComponent,
    CategoriesComponent,
    OrdersComponent,
    CustomersComponent,
    QuriesComponent,
    UpdateProductComponent,
    EditProductComponent,
  ],
})
export class AdminModule {}
