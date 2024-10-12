import { Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {

  public title: string;
  public optionToClose: string;

  constructor (
    @Inject(MAT_SNACK_BAR_DATA) public data: {title: string, optionToClose: string}
  ) {
    this.title = data.title;
    this.optionToClose = data.optionToClose;
  }

  snackBarRef = inject(MatSnackBarRef);
}
