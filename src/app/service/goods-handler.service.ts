import { Injectable } from '@angular/core';
import {TestData} from "../data/TestData";
import {Good} from "../model/Good";

@Injectable({
  providedIn: 'root'
})
export class GoodsHandlerService {

  constructor() { }

  getGoods(): Good[] {
    return TestData.Goods;
  }

  getReceiptGoods(receiptId: number): Good[] {
    return TestData.Goods.filter(el => el.ReceiptId === receiptId);
  }
}
