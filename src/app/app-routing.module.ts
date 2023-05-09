import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/About.component';
import { AdminHomeComponent } from './Admin/AdminHome/AdminHome.component';
import { CategoriesComponent } from './Admin/Categories/Categories.component';
import { CustomersComponent } from './Admin/Customers/Customers.component';
import { DashboardComponent } from './Admin/Dashboard/Dashboard.component';
import { EditProductComponent } from './Admin/EditProduct/EditProduct.component';
import { OrdersComponent } from './Admin/Orders/Orders.component';
import { ProductsComponent } from './Admin/Products/Products.component';
import { QuriesComponent } from './Admin/Quries/Quries.component';
import { SettingsComponent } from './Admin/Settings/Settings.component';
import { UpdateProductComponent } from './Admin/updateProduct/updateProduct.component';
import { CartComponent } from './Cart/Cart.component';
import { ContactComponent } from './Contact/Contact.component';
import { DeliveryComponent } from './Delivery/Delivery.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { ProductListComponent } from './ProductList/ProductList.component';
import { RegisterComponent } from './Register/Register.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'product',
    component:ProductListComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'delivery',
    component:DeliveryComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin/dashboard',
    component:DashboardComponent
  },
  {
    path:'admin/home',
    component:AdminHomeComponent
  },
  {
    path:'admin/products',
    component:ProductsComponent
  },
  {
    path:'admin/EditProduct/:id',
    component:EditProductComponent
  },
  {
    path:'admin/updateProduct',
    component:UpdateProductComponent,
  },
  {
    path:'admin/categories',
    component:CategoriesComponent
  },
  {
    path:'admin/customers',
    component:CustomersComponent
  },
  {
    path:'admin/orders',
    component:OrdersComponent
  },
  {
    path:'admin/queries',
    component:QuriesComponent
  },
  {
    path:'admin/settings',
    component:SettingsComponent
  },

  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
