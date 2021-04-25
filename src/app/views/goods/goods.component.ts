import { Component, OnInit } from '@angular/core';
import {Good} from '../../model/Good';
import {GoodsHandlerService} from '../../service/goods-handler.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  public goodList: Good[];

  constructor(private goodHandler: GoodsHandlerService) { }

  ngOnInit(): void {
    this.goodHandler.getGoods()
      .subscribe(data => this.goodList = data);
  }

}
