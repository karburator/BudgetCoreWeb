import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Route} from '@angular/router';
import {Receipt} from '../../model/Receipt';
import {ReceiptsHandlerService} from '../../service/receipts-handler.service';
import {Good} from "../../model/Good";
import {GoodsHandlerService} from "../../service/goods-handler.service";

@Component({
  selector: 'app-receipt-details',
  templateUrl: './receipt-details.component.html',
  styleUrls: ['./receipt-details.component.css']
})
export class ReceiptDetailsComponent implements OnInit {
  receiptId: number;
  receipt: Receipt;
  items: Good[];

  constructor(private route: ActivatedRoute,
              private receiptHandler: ReceiptsHandlerService,
              private goodHandler: GoodsHandlerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.receiptId = id;
      this.receiptHandler.getReceipt(this.receiptId)
        .subscribe(data => this.receipt = data);
      this.goodHandler.getReceiptGoods(this.receiptId)
        .subscribe(data => this.items = data);
    });
  }
}
