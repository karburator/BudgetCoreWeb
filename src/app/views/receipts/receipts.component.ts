import { Component, OnInit } from '@angular/core';
import {ReceiptsHandlerService} from "../../service/receipts-handler.service";
import {Receipt} from "../../model/Receipt";
import {Router} from "@angular/router";

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {

  receipts: Receipt[];

  constructor(private router: Router,
              private receiptHandler: ReceiptsHandlerService) { }

  ngOnInit(): void {
    this.receiptHandler.getReceipts()
      .subscribe(data => this.receipts = data);
  }

  goDetails(id: number) {
    this.router.navigate([`/receipts/${id}`]);
  }
}
