import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersLayoutPageComponent } from './pages/orders-layout-page/orders-layout-page.component';
import { OrdersListPageComponent } from './pages/orders-list-page/orders-list-page.component';
import { OrdersCreatePageComponent } from './pages/orders-create-page/orders-create-page.component';
import { OrdersViewPageComponent } from './pages/orders-view-page/orders-view-page.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersLayoutPageComponent,
    children: [
      { path: 'list', component: OrdersListPageComponent },
      { path: 'create', component: OrdersCreatePageComponent },
      { path: 'edit/:order_id', component: OrdersCreatePageComponent },
      { path: 'view/:order_id', component: OrdersViewPageComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
