import { Component, OnInit } from '@angular/core';
import {Good} from "../../model/Good";

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css'],
  inputs: ['goodList']
})
export class GoodsListComponent implements OnInit {
  public goodList: Good[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
