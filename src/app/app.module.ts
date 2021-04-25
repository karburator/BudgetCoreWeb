import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceiptsComponent } from './views/receipts/receipts.component';
import {ReceiptsHandlerService} from './service/receipts-handler.service';
import { LeftMenuComponent } from './views/left-menu/left-menu.component';
import { ReceiptDetailsComponent } from './views/receipt-details/receipt-details.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { GoodsListComponent } from './views/goods-list/goods-list.component';
import { GoodsComponent } from './views/goods/goods.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './views/products/products.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import {GoodsHandlerService} from './service/goods-handler.service';
import {ProductHandlerService} from './service/product-handler.service';
import { ChartExampleComponent } from './views/chart-example/chart-example.component';
import {ChartistModule} from 'ng-chartist';

@NgModule({
  declarations: [
    AppComponent,
    ReceiptsComponent,
    LeftMenuComponent,
    ReceiptDetailsComponent,
    PageNotFoundComponent,
    GoodsListComponent,
    GoodsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ChartExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartistModule
  ],
  providers: [
    ReceiptsHandlerService,
    GoodsHandlerService,
    ProductHandlerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
