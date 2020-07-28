import { Component, OnInit } from '@angular/core';
import {ReceiptsHandlerService} from "../../service/receipts-handler.service";
import {Receipt} from "../../model/Receipt";

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {

  receipts: Receipt[];

  constructor(private receiptHandler: ReceiptsHandlerService) { }

  ngOnInit(): void {
    this.receipts = this.receiptHandler.getReceipts();
  }

}
