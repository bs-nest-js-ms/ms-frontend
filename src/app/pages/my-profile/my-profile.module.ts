import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfilesLayoutPageComponent } from './pages/profiles-layout-page/profiles-layout-page.component';
import { MyProfileRoutingModule } from './my-profile-routing.module';



@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfilesLayoutPageComponent
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
  ]
})
export class MyProfileModule { }
