import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InputSearchByComponent } from './components/input-search-by/input-search-by.component';
import { SelectByComponent } from './components/select-by/select-by.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    InputSearchByComponent,
    SelectByComponent,
    LoadingSpinnerComponent,
    DialogComponent,
    SnackbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    InputSearchByComponent,
    SelectByComponent,
    LoadingSpinnerComponent,
  ]
})
export class SharedModule { }
