import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goReceipts() {
    this.router.navigate(['/receipts']);
  }

  goGoods() {
    this.router.navigate(['/goods']);
  }
}
