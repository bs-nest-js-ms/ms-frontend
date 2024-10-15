import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments';
import { delay, Observable } from 'rxjs';
import {
  CreateProduct,
  ProductDeletedResponse,
  ProductItem,
  ProductsResponse,
  SearchProductBy,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly productApiRestUrl: string = environment.productApiRestUrl;
  private readonly msApiUrl: string = environment.apiUrl;
  private readonly productsRoute: string = environment.endpoints.products;
  private readonly uploadsRoute: string = environment.endpoints.uploads;

  constructor(private readonly httpClient: HttpClient) {}

  public getAllProducts(
    limit: number = environment.defaultLimit,
    skip: number = environment.defaultSkip,
    searchProductBy: SearchProductBy = {}
  ): Observable<ProductsResponse> {
    let queryParams: string = `limit=${limit}&skip=${skip}`;

    if (searchProductBy.name) {
      queryParams = queryParams + `&name=${searchProductBy.name}`;
    }

    if (searchProductBy.description) {
      queryParams = queryParams + `&description=${searchProductBy.description}`;
    }

    if (searchProductBy.is_active !== undefined) {
      queryParams = queryParams + `&is_active=${searchProductBy.is_active}`;
    }

    return this.httpClient
      .get<ProductsResponse>(
        `${this.msApiUrl}/${this.productsRoute}?${queryParams}`
      )
      .pipe(delay(500));
  }

  public getProduct(product_id: string): Observable<ProductItem> {
    return this.httpClient.get<ProductItem>(
      `${this.msApiUrl}/${this.productsRoute}/${product_id}`,
      {}
    );
  }

  public saveProduct(createProduct: CreateProduct): Observable<ProductItem> {
    return this.httpClient.post<ProductItem>(
      `${this.msApiUrl}/${this.productsRoute}`,
      createProduct
    );
  }

  public updateProduct(
    createProduct: CreateProduct,
    product_id: string
  ): Observable<ProductItem> {
    console.log({ ...createProduct, product_id });
    return this.httpClient.patch<ProductItem>(
      `${this.msApiUrl}/${this.productsRoute}/${product_id}`,
      createProduct
    );
  }

  public deleteProduct(product_id: string): Observable<ProductItem> {
    return this.httpClient.delete<ProductItem>(
      `${this.msApiUrl}/${this.productsRoute}/${product_id}`,
      {}
    );
  }

  public deleteProductImage(
    productId: string,
    productImageId: string
  ): Observable<ProductDeletedResponse> {
    return this.httpClient.delete<ProductDeletedResponse>(
      `${this.msApiUrl}/${this.productsRoute}/${productId}/images/${productImageId}`
    );
  }

  public createProductFiles(
    files: File[],
    productId: string
  ): Observable<ProductItem> {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });
    // return formData.get('files');
    return this.httpClient.post<ProductItem>(
      `${this.productApiRestUrl}/${this.uploadsRoute}/product/images/${productId}`,
      formData
    );
  }
}
