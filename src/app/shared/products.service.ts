import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) {}

  private _products: Product[] = [];

  // private products$ = new Observable<Product[]>((observer) => {
  //   observer.next(this._products);
  // });
  // private _products$ = of(this._products);

  getProducts(): Observable<any> {
    return this._HttpClient.get('http://localhost:4000/api/products');
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this._products.find((product) => product.id === id));
  }

  updateProduct(productData: Product): Observable<Product> {
    let oldProduct = this._products.find(
      (product) => product.id === productData.id
    );

    oldProduct = { ...oldProduct, ...productData };
    this._products = this._products.filter(
      (product) => product.id !== productData.id
    );
    this._products = [...this._products, oldProduct];
    console.log(this._products);

    return of(oldProduct);
  }
}
