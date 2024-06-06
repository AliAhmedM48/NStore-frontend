import {
  Component,
  OnDestroy,
  OnInit,
  TransferState,
  makeStateKey,
} from '@angular/core';
import { ProductsService } from '../../shared/products.service';
import { Product } from '../../shared/product.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit, OnDestroy {
  products?: Product[];
  private _getProductsSubscription: Subscription = new Subscription();
  constructor(
    private _ProductsService: ProductsService,
    private _Router: Router,
    private _TransferState: TransferState
  ) {}
  ngOnInit(): void {
    this.fetchProducts();
  }

  private fetchProducts() {
    this._getProductsSubscription = this._ProductsService
      .getProducts()
      .subscribe({
        next: (response) => {
          this.products = response;
        },
      });
  }

  onEdit(productData: Product) {
    this._Router.navigate(['/admin/product/edit/', productData.id]);
    this._TransferState.set(makeStateKey<Product>('product'), productData);
  }

  onDelete(id: number) {
    this._ProductsService.deleteOne(id).subscribe({
      next: (response) => {
        this.products = this.products?.filter((product) => product.id != id);
      },
    });
  }

  ngOnDestroy(): void {
    this._getProductsSubscription.unsubscribe();
  }
}
