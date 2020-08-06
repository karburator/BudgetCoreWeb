import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductHandlerService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:5000/product`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:5000/product/${id}`);
  }
}
