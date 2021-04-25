import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {GoodsHandlerService} from '../../service/goods-handler.service';
import {ProductHandlerService} from '../../service/product-handler.service';
import {Good} from '../../model/Good';
import {Product} from '../../model/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId: number;
  product: Product;
  goods: Good[];

  constructor(private route: ActivatedRoute,
              private productHandler: ProductHandlerService,
              private goodHandler: GoodsHandlerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = parseInt(params.get('id'), null);
      this.productHandler.getProduct(this.productId)
        .subscribe(data => this.product = data);
      this.goodHandler.getGoodsByProductId(this.productId)
        .subscribe(data => this.goods = data);
    });
  }

}
