import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductItem } from '../../../pages/products/interfaces';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  public matDialogTitle: string;
  public product: ProductItem;
  constructor (
    @Inject(MAT_DIALOG_DATA) public data: {matDialogTitle: string, product: ProductItem}
  ) {
    this.matDialogTitle = data.matDialogTitle;
    this.product = data.product;
    console.log('Title: ',  this.matDialogTitle, ' Product: ', this.product);
  }
}
