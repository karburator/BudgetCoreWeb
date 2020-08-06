import { Injectable } from '@angular/core';
import {TestData} from "../data/TestData";
import {Good} from "../model/Good";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GoodsHandlerService {

  constructor(private http: HttpClient) { }

  getGoods(): Good[] {
    return TestData.Goods;
  }

  getReceiptGoods(receiptId: number): Observable<Good[]> {
    return this.http.get<Good[]>(`http://localhost:5000/good/receipt/${receiptId}`);
  }

  getGoodsByProductId(productId: number): Observable<Good[]> {
    console.log(`productId: ${productId}`);
    return this.http.get<Good[]>(`http://localhost:5000/good/product/${productId}`);
  }
}
