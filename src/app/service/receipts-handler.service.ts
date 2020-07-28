import { Injectable } from '@angular/core';
import {TestData} from "../data/TestData";
import {Receipt} from "../model/Receipt";

@Injectable({
  providedIn: 'root'
})
export class ReceiptsHandlerService {

  constructor() { }

  getReceipts(): Receipt[] {
    return TestData.Receipts;
  }

  getReceipt(id: number): Receipt {
    return TestData.Receipts.filter(el => el.id === id)[0];
  }
}
