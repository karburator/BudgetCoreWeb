import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async goReceipts(): Promise<void> {
    await this.router.navigate(['/receipts']);
  }

  async goGoods(): Promise<void> {
    await this.router.navigate(['/goods']);
  }

  getUrl(): string {
    return this.router.url;
  }

  async goProducts(): Promise<void> {
    await this.router.navigate(['/products']);
  }
}
