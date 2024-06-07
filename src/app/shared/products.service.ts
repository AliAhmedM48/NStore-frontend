import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _baseAPIUrl = 'https://nstore-backend.onrender.com/api';
  constructor(private _HttpClient: HttpClient) {}

  private _products: Product[] = [];

  createOne(productData: Product): Observable<any> {
    return this._HttpClient.post(`${this._baseAPIUrl}/product`, productData);
  }

  getProducts(): Observable<any> {
    return this._HttpClient.get(`${this._baseAPIUrl}/products`);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this._products.find((product) => product.id === id));
  }

  deleteOne(id: number): Observable<any> {
    return this._HttpClient.delete(`${this._baseAPIUrl}/product/${id}`);
  }

  updateProduct(productData: Product): Observable<any> {
    return this._HttpClient.put(`${this._baseAPIUrl}/product`, productData);
  }
}
