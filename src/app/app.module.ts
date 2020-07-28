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

@NgModule({
  declarations: [
    AppComponent,
    ReceiptsComponent,
    LeftMenuComponent,
    ReceiptDetailsComponent,
    PageNotFoundComponent,
    GoodsListComponent,
    GoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ReceiptsHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
