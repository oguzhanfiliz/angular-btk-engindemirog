import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { Product } from './product/product';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products',component : ProductComponent,canActivate:[LoginGuard]},
  {path:'product-add-1',component : ProductAddForms1Component,canActivate:[LoginGuard]},
  {path:'product-add-2',component : ProductAddForms2Component,canActivate:[LoginGuard]},
  {path:'login',component : LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'products/category/:categoryId',component : ProductComponent,canActivate:[LoginGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
