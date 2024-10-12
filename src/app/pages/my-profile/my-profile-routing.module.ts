import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesLayoutPageComponent } from './pages/profiles-layout-page/profiles-layout-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilesLayoutPageComponent,
    children: [
      { path: 'me', component: ProfilePageComponent },
      { path: '', redirectTo: 'me', pathMatch: 'full' },
      { path: '**', redirectTo: 'mew'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
