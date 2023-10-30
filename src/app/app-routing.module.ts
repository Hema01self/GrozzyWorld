import { Component, NgModule } from '@angular/core';
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
import { UpdateProductComponent } from './Admin/updateProduct/updateProduct.component';
import { CartComponent } from './Cart/Cart.component';
import { ContactComponent } from './Contact/Contact.component';
import { DeliveryComponent } from './Delivery/Delivery.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { ProductListComponent } from './ProductList/ProductList.component';
import { RegisterComponent } from './Register/Register.component';
import { AuthGuard } from './auth.guard';
import { AdminAuthGuard } from './admin-auth.guard';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { ProductDetailComponent } from './productDetail/productDetail.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailComponent } from './Order-detail/Order-detail.component';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { ReviewComponent } from './Admin/Review/Review.component';
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
path:'productdetail/:id',
component:ProductDetailComponent
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'delivery',
    component:DeliveryComponent,
    canActivate:[AuthGuard]

  },
{
  path:'my-order',
  component:MyOrdersComponent,
  canActivate:[AuthGuard]
},
{
  path:'my-order/:check',
  component:OrderDetailComponent,
  canActivate:[AuthGuard]
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
    path:'forgot-password',
    component:ForgotPasswordComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin/dashboard',
    component:DashboardComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'admin/home',
    component:AdminHomeComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'admin/products',
    component:ProductsComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'admin/EditProduct/:id',
    component:EditProductComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'admin/updateProduct',
    component:UpdateProductComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'admin/categories',
    component:CategoriesComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'admin/customers',
    component:CustomersComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'admin/orders',
    component:OrdersComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'admin/reviews',
    component:ReviewComponent,
    canActivate:[AdminAuthGuard]

  },
  {
    path:'admin/queries',
    component:QuriesComponent,
    canActivate:[AdminAuthGuard]
  },

  {
    path:'',
    component:HomeComponent
  },
  {
  path:'**',
  component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
