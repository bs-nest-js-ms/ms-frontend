import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';
import { ProductItem } from '../../../products/interfaces';
import { DOCUMENT } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { openSnackBar } from '../../../../shared/helpers';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrl: './products-list-page.component.scss'
})
export class ProductsListPageComponent implements OnInit {

  public products: ProductItem[] = [];
  public showButton: boolean = false;
  public scrollHeigh: number = 300;
  public snackbarDurationInSeconds = 5;

  constructor (
    @Inject(DOCUMENT) private document: Document,
    private readonly productsService: ProductsService,
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  @HostListener('window:scroll')
  public onScrollInWindows (): void {
    const yCoordenate = window.scrollY;
    const scrollTop = this.document.documentElement.scrollTop;

    this.showButton = (yCoordenate || scrollTop) > this.scrollHeigh;
  }

  public onGoToScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  public getProducts(): void {
    this.productsService.getAllProducts()
      .subscribe({
        next: (data) => {
          console.log(data);
          this.products = data.data;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
}
