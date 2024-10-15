import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductItem } from '../../../pages/products/interfaces';
import { RoutesToUpload, UploadFilesDialogComponent } from '../upload-files-dialog/upload-files-dialog.component';
import { ProductImage } from '../../../pages/products/interfaces/products.interface';
import { ProductsService } from '../../../pages/products/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  public matDialogTitle: string;
  public product: ProductItem;
  constructor (
    @Inject(MAT_DIALOG_DATA) public data: {matDialogTitle: string, product: ProductItem},
    private readonly dialog: MatDialog,
    private readonly productService: ProductsService,
    private readonly snackbar: MatSnackBar,
  ) {
    this.matDialogTitle = data.matDialogTitle;
    this.product = data.product;
    // console.log('Title: ',  this.matDialogTitle, ' Product: ', this.product);
  }

  public onDeleteImage(productId: string, productImage: ProductImage): void {
    console.log({productId, productImage});
    this.productService.deleteProductImage(productId, productImage.id)
      .subscribe({
        next: (data) => {
          this.openSnackBar(
            'User Files Deleted Successfully!',
            'Close',
            'snackbar-success-bg'
          );
          this.product = {
            ...this.product, 
            images: this.product.images?.length === 0 ? [] : this.product.images?.filter(image => image.id !== productImage.id)
          };
        },
        error: (error) => {
          this.openSnackBar(
            `Error uploading images: ${error.error.message}`,
            'Close',
            'snackbar-error-bg'
          );
        },
      })
  }

  openDialog() {
    // console.log({product});
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(UploadFilesDialogComponent, {
      data: {
        matDialogTitle: 'Upload Images Here',
        routeToUpload: RoutesToUpload.PRODUCTS,
        productId: this.product.id,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public openSnackBar(
    title: string,
    optionToClose: string,
    bgSnackbar: string
  ) {
    this.snackbar.openFromComponent(SnackbarComponent, {
      duration: 5000,
      data: {
        title: title,
        optionToClose: optionToClose,
      },
      panelClass: [bgSnackbar],
    });
  }
}
