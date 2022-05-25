import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  //behaviour subject to share data
  public searchkeyfromcategory = new BehaviorSubject<string>('');
  public keyfromSearchBar = new BehaviorSubject<string>('');

  baseUrl = `http://localhost:3000/products`;

  createProduct(productBody: any): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, productBody);
  }
  //baseUrl = `http://localhost:3000/products/`
  getAllProducts(): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}`);
  }

  //baseUrl = `http://localhost:3000/products/`+ProductId;
  getProductByID(ProductId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/${ProductId}`);
  }
  // baseUrl = `http://localhost:3000/products/`+ProductId;
  upadteProductByID(ProductId: number, productBody: any): Observable<Product> {
    return this.httpClient.put<Product>(
      `${this.baseUrl}/${ProductId}`,
      productBody
    );
  }

  //baseUrl = `http://localhost:3000/products/`+ProductId;
  deleteProductByID(ProductId: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.baseUrl}/${ProductId}`);
  }

  serachByCategoryID(categaryID: number): Observable<Product> {
    const baseUrl = `http://localhost:3000/products/category` + categaryID;
    return this.httpClient.get<Product>(this.baseUrl);
  }
}
