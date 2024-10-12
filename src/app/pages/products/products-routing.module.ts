import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsLayoutPageComponent } from './pages/products-layout-page/products-layout-page.component';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductsCreatePageComponent } from './pages/products-create-page/products-create-page.component';
import { ProductsViewPageComponent } from './pages/products-view-page/products-view-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsLayoutPageComponent,
    children: [
      { path: 'list', component: ProductsListPageComponent },
      { path: 'create', component: ProductsCreatePageComponent },
      { path: 'edit/:product_id', component: ProductsCreatePageComponent },
      { path: 'view/:product_id', component: ProductsViewPageComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
