import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLayoutPageComponent } from './pages/users-layout-page/users-layout-page.component';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';
import { UsersCreatePageComponent } from './pages/users-create-page/users-create-page.component';
import { UsersViewPageComponent } from './pages/users-view-page/users-view-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersLayoutPageComponent,
    children: [
      { path: 'list', component: UsersListPageComponent },
      { path: 'create', component: UsersCreatePageComponent },
      { path: 'edit/:user_id', component: UsersCreatePageComponent },
      { path: 'view/:user_id', component: UsersViewPageComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
