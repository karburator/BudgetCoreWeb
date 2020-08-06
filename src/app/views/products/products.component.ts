import { Component, OnInit } from '@angular/core';
import {ProductHandlerService} from "../../service/product-handler.service";
import {Product} from "../../model/Product";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private router: Router,
              private productHandler: ProductHandlerService) { }

  ngOnInit(): void {
    this.productHandler.getProducts()
      .subscribe(data => this.products = data);
  }

  goDetails(id: number) {
    this.router.navigate([`/products/${id}`]);
  }
}
