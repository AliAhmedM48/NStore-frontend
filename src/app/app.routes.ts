import { Routes } from '@angular/router';
import { ProductsComponent as AdminProductsComponent } from './admin-dashboard/products/products.component';
import { ProductsComponent as UserProductsComponent } from './user-dashboard/products/products.component';
import { LoginComponent } from './admin-dashboard/login/login.component';
import { EditProductComponent } from './admin-dashboard/edit-product/edit-product.component';
import { AddProductComponent } from './admin-dashboard/add-product/add-product.component';

export const routes: Routes = [
  { path: '', component: UserProductsComponent },
  {
    path: 'admin',
    children: [
      { path: '', component: LoginComponent },
      { path: 'products', component: AdminProductsComponent },
      { path: 'product/add', component: AddProductComponent },
      { path: 'product/edit/:id', component: EditProductComponent },
    ],
  },
];
