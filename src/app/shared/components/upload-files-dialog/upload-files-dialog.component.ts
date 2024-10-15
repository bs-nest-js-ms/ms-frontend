import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { ProductsService } from '../../../pages/products/services/products.service';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

export enum RoutesToUpload {
  PRODUCTS = 'PRODUCTS',
  USERS = 'USERS',
}

@Component({
  selector: 'app-upload-files-dialog',
  templateUrl: './upload-files-dialog.component.html',
  styleUrl: './upload-files-dialog.component.scss',
})
export class UploadFilesDialogComponent {
  public matDialogTitle: string;
  private routeToUpload: string;
  private productId: string;
  public selectedFiles: File[] = [];
  public previews: string[] = [];
  public allowedExtensions: string[] = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/gif',
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      matDialogTitle: string;
      routeToUpload: RoutesToUpload;
      productId: string;
    },
    private readonly productService: ProductsService,
    private readonly snackbar: MatSnackBar,
    private readonly router: Router,
    private readonly dialog: MatDialog
  ) {
    this.matDialogTitle = data.matDialogTitle;
    this.routeToUpload = data.routeToUpload;
    this.productId = data.productId;
    // console.log('Title: ',  this.matDialogTitle);
  }

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files);
      this.previews = [];

      let notValidFile: boolean = false;
      this.selectedFiles.forEach((file) => {
        // console.log(file.type);
        if (!this.allowedExtensions.includes(file.type)) {
          notValidFile = true;
          return;
        }
      });

      if (notValidFile) {
        this.openSnackBar(
          `Error: One of this images are not permitted, only accepts images with extentions: ${this.allowedExtensions.join(
            ','
          )}`,
          'Close',
          'snackbar-error-bg'
        );
      } else {
        for (const file of this.selectedFiles) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.previews.push(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      }
    }
  }

  public onSaveFiles() {
    if (this.selectedFiles.length === 0) {
      this.openSnackBar(
        'Error: It is necesary upload one file at least',
        'Close',
        'snackbar-error-bg'
      );
    } else {
      switch (this.routeToUpload) {
        case RoutesToUpload.PRODUCTS:
          const files = this.productService
            .createProductFiles(this.selectedFiles, this.productId)
            .subscribe({
              next: (data) => {
                console.log(data)
                this.dialog.closeAll();
                const dialogRef = this.dialog.open(DialogComponent, {
                  data: {
                    matDialogTitle: 'Product Images',
                    product: data,
                  },
                });

                dialogRef.afterClosed().subscribe((result) => {
                  console.log(`Dialog result: ${result}`);
                });
                this.openSnackBar(
                  `Product ${data.name} Files Uploaded Successfully!`,
                  'Close',
                  'snackbar-success-bg'
                );
              },
              error: (error) => {
                this.openSnackBar(
                  `Error uploading images: ${error.error.message}`,
                  'Close',
                  'snackbar-error-bg'
                );
              },
            });
          break;
        case RoutesToUpload.USERS:
          this.openSnackBar(
            'User Files Uploaded Successfully!',
            'Close',
            'snackbar-success-bg'
          );
          break;
        default:
          this.openSnackBar(
            'Error: save method file not implemented yet',
            'Close',
            'snackbar-error-bg'
          );
          break;
      }
    }
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
