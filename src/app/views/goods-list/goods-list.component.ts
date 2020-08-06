import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Good} from '../../model/Good';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit, OnChanges {
  @Input() goodList: Good[];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`changes`);
    console.log(changes);
    if (changes.goodList.currentValue) {
       this.goodList = changes.goodList.currentValue;
       console.log(this.goodList);
    }
  }

}
