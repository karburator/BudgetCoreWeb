import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Good} from '../../model/Good';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit, OnChanges {
  @Input() public goodList: Good[];

  constructor() {
  }

  ngOnInit(): void  {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.goodList.currentValue) {
       this.goodList = changes.goodList.currentValue;
    }
  }

}
