import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicStorePageComponent } from './pages/public-store-page/public-store-page.component';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: PublicStorePageComponent,
    children: [
      { path: 'all', component: ProductsListPageComponent },
      { path: '**', redirectTo: 'all' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicStoreRoutingModule { }
