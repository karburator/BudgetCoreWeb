import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReceiptsComponent} from "./views/receipts/receipts.component";
import {ReceiptDetailsComponent} from "./views/receipt-details/receipt-details.component";
import {PageNotFoundComponent} from "./views/page-not-found/page-not-found.component";
import {GoodsComponent} from "./views/goods/goods.component";


const routes: Routes = [
  { path: '', redirectTo: '/receipts', pathMatch: 'full' },
  { path: 'receipts', component: ReceiptsComponent },
  {
    path: 'receipts/:id',
    component: ReceiptDetailsComponent,
  },
  { path: 'goods', component: GoodsComponent },
  { path: '**',   component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ReceiptsComponent,
  ReceiptDetailsComponent,
  GoodsComponent,
  PageNotFoundComponent
]
