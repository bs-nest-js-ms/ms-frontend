import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersLayoutPageComponent } from './pages/users-layout-page/users-layout-page.component';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';
import { UsersCreatePageComponent } from './pages/users-create-page/users-create-page.component';
import { UsersViewPageComponent } from './pages/users-view-page/users-view-page.component';


@NgModule({
  declarations: [
    UsersLayoutPageComponent,
    UsersListPageComponent,
    UsersCreatePageComponent,
    UsersViewPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
