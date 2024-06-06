import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    ProductsComponent,
    LoginComponent,
    EditProductComponent,
    AddProductComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
})
export class AdminDashboardModule {}
