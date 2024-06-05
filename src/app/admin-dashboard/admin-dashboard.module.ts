import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [ProductsComponent, LoginComponent, EditProductComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AdminDashboardModule {}
