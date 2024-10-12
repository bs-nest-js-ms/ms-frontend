import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../../services/products.service';
import { ProductItem, SearchProductBy } from '../../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { Router } from '@angular/router';
import { SnackbarComponent } from '../../../../shared/components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrl: './products-list-page.component.scss'
})
export class ProductsListPageComponent implements AfterViewInit, OnInit {

  public isLoading: boolean = false;
  public limit: number = 5;
  public skip: number = 0;
  public totalRecords: number = 0;
  public displayedColumns: string[] = ['view', 'name', 'description', 'price', 'quantity', 'is_active', 'created_at', 'updated_at', 'images'];
  public productsDataSource = new MatTableDataSource<ProductItem>([]);
  public searchProductBy: SearchProductBy = {};
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.paginator.pageIndex = this.skip;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  constructor (
    private readonly productsService: ProductsService, 
    private readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly snackbar: MatSnackBar,
  ) {}

  public getProducts (): void {
    this.isLoading = true;
    this.productsService.getAllProducts(this.limit, this.skip, this.searchProductBy)
      .subscribe({
        next: (data) => {
          this.totalRecords = data.totalRecords;
          this.skip = data.currentPage;
          this.productsDataSource.data = data.data;
          // console.log('Products: ', this.productsDataSource.data);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  public onSearchWithoutFilter (event: {
    length: number;
    pageIndex: number;
    pageSize: number;
  }) {
    this.limit = event.pageSize;
    this.skip = event.pageIndex;
    this.getProducts();
  }
  
  public onReceiveInputNameValue (inputValue: string): void {
    delete this.searchProductBy.name;
    if (inputValue.trim().length !== 0) {
      this.searchProductBy = { ...this.searchProductBy, name: inputValue };
    }
    this.getProducts();
  }

  public onReceiveInputDescriptionValue (inputValue: string): void {
    delete this.searchProductBy.description;
    if (inputValue.trim().length !== 0) {
      this.searchProductBy = { ...this.searchProductBy, description: inputValue };
    }
    this.getProducts();
  }

  public onSelectStatus (is_active: string): void {
    delete this.searchProductBy.is_active;
    if (is_active !== undefined) {
      this.searchProductBy = { ...this.searchProductBy, is_active: is_active };
    }
    this.getProducts();
  }

  public onCreateNewProduct(): void {
    this.router.navigate(['/pages/products/create']);
  }

  public onDeleteProduct (product_id: string) {
    // console.log({product_id});
    this.productsService.deleteProduct(product_id)
      .subscribe({
        next: (data) => {
          // console.log(data);
          this.getProducts();
          this.openSnackBar(`Product ${data.name} deleted successfully`, 'Close', 'snackbar-success-bg');
        },
        error: (error) => {
          this.openSnackBar(`Error: deleting product: ${error.error.message}`, 'Close', 'snackbar-error-bg');
        },
      });
  }

  openDialog(product: ProductItem) {
    // console.log({product});
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        matDialogTitle: 'Product Images',
        product: product,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public openSnackBar(title: string, optionToClose: string, bgSnackbar: string) {
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
