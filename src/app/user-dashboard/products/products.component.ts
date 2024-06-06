import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/products.service';
import { Product } from '../../shared/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products?: Product[];
  private _getProductsSubscription: Subscription = new Subscription();

  constructor(private _ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  private fetchProducts() {
    this._getProductsSubscription = this._ProductsService
      .getProducts()
      .subscribe({
        next: (response) => {
          console.log(response);

          this.products = response.data;
        },
      });
  }

  ngOnDestroy(): void {
    this._getProductsSubscription.unsubscribe();
  }
}
