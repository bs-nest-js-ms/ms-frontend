import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicStoreRoutingModule } from './public-store-routing.module';
import { PublicStorePageComponent } from './pages/public-store-page/public-store-page.component';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    PublicStorePageComponent,
    ProductsListPageComponent
  ],
  imports: [
    CommonModule,
    PublicStoreRoutingModule,
    MaterialModule,
  ]
})
export class PublicStoreModule { }
