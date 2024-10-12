import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from '../../../../shared/validators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../../../shared/components/snackbar/snackbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { switchMap } from 'rxjs';
import { ProductItem } from '../../interfaces';

@Component({
  selector: 'app-products-create-page',
  templateUrl: './products-create-page.component.html',
  styleUrl: './products-create-page.component.scss'
})
export class ProductsCreatePageComponent implements OnInit {

  public product_id: string = '';
  public snackbarDurationInSeconds = 5;
  public productForm: FormGroup;
  public productFormValidators = new FormValidators();
  
  public get currentProduct (): ProductItem {
    const product = this.productForm.value as ProductItem;
    return product;
  }

  constructor (
    private readonly formBuilder: FormBuilder, 
    private readonly snackbar: MatSnackBar,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly productsService: ProductsService,
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)], []],
      description: ['', [Validators.required, Validators.minLength(3)], []],
      price: [0, [Validators.required, Validators.min(0)], []],
      quantity: [0, [Validators.required, Validators.min(0)], []],
    });
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;
    this.activatedRoute.params
      .pipe(
        switchMap(
          ({product_id}) => this.productsService.getProduct(product_id),
        ),
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.product_id = data.id;
          this.productForm.reset({
            name: data.name,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
          });
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  public onSave(): void {
    if (this.productForm.invalid) {
      this.openSnackBar('Product form not valid, please check the form', 'Close',  'snackbar-error-bg');
    } else {
      // console.log('Preparing to save this product', this.productForm.value);
      if (this.product_id.trim().length === 0) {
        this.productsService.saveProduct(this.productForm.value)
        .subscribe({
          next: (product) => {
            // console.log(product);
            this.productForm.reset();
            this.openSnackBar(`Product ${product.name} created successfully`, 'Close',  'snackbar-success-bg');
            this.router.navigate(['/pages/products/list']);
          },
          error: (error) => {
            // console.log(error.error.message.join(','));
            this.openSnackBar(`Error in form: ${error.error.message}`, 'Close', 'snackbar-error-bg');
          },
        });
      } else {
        this.productsService.updateProduct(this.productForm.value, this.product_id)
          .subscribe({
            next: (product) => {
              // console.log(product);
              this.productForm.reset();
              this.openSnackBar(`Product ${product.name} updated successfully`, 'Close',  'snackbar-success-bg');
              this.router.navigate(['/pages/products/list']);
            },
            error: (error) => {
              // console.log(error);
              this.openSnackBar(`Error in product form: ${error.error.message}`, 'Close', 'snackbar-error-bg')
            }
          });
      }

    }
  }

  public openSnackBar(title: string, optionToClose: string, bgSnackbar: string) {
    this.snackbar.openFromComponent(SnackbarComponent, {
      duration: this.snackbarDurationInSeconds * 1000,
      data: {
        title: title,
        optionToClose: optionToClose,
      },
      panelClass: [bgSnackbar],
    });
  }
}
