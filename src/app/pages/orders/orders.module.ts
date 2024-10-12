import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersLayoutPageComponent } from './pages/orders-layout-page/orders-layout-page.component';
import { OrdersCreatePageComponent } from './pages/orders-create-page/orders-create-page.component';
import { OrdersListPageComponent } from './pages/orders-list-page/orders-list-page.component';
import { OrdersViewPageComponent } from './pages/orders-view-page/orders-view-page.component';


@NgModule({
  declarations: [
    OrdersLayoutPageComponent,
    OrdersCreatePageComponent,
    OrdersListPageComponent,
    OrdersViewPageComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
