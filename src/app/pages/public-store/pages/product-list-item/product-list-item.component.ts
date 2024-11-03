import { Component, Input, OnInit } from '@angular/core';
import { ProductItem } from '../../../products/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { openSnackBar } from '../../../../shared/helpers';

@Component({
  selector: 'public-store-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss'
})
export class ProductListItemComponent implements OnInit {

  @Input() public productItem!: ProductItem;
  public counter: number = 0;
  public snackbarDurationInSeconds: number = 5000;

  constructor(
    private readonly snackbar: MatSnackBar
  ) { }

  public quantityValue: number = 0;
  ngOnInit(): void {
    if (!this.productItem) throw new Error('Product item is required!');
  }

  public onAddToCart(product: ProductItem): void {
    if (this.counter > 0) {
      console.log({
        name: product.name,
        quantity: this.counter,
        price: product.price,
      });
    } else {
      openSnackBar('You cannot add to cart a product with zero by quantity', 'Close', 'snackbar-error-bg', this.snackbarDurationInSeconds, this.snackbar);
    }
  }

  public onAddToCardValue(value: number, quantity: number) {
    console.log({value: this.counter + value, quantity})
    if (this.counter + value >= 0) {
      if (this.counter + value > quantity) {
        openSnackBar('You cannot add more products than the product stock', 'Close',  'snackbar-error-bg', this.snackbarDurationInSeconds, this.snackbar);
      } else {
        this.counter += value;
      }
    }
  }
}
