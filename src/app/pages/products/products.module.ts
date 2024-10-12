import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsLayoutPageComponent } from './pages/products-layout-page/products-layout-page.component';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductsCreatePageComponent } from './pages/products-create-page/products-create-page.component';
import { ProductsViewPageComponent } from './pages/products-view-page/products-view-page.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsLayoutPageComponent,
    ProductsListPageComponent,
    ProductsCreatePageComponent,
    ProductsViewPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
