import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { RecoverPageComponent } from './pages/recover-page/recover-page.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    LayoutPageComponent,
    SignInPageComponent,
    SignUpPageComponent,
    RecoverPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
  ]
})
export class AuthModule { }
