import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments';
import { delay, Observable } from 'rxjs';
import {
  CreateProduct,
  ProductItem,
  ProductsResponse,
  SearchProductBy,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly msApiUrl: string = environment.apiUrl;
  private readonly route: string = environment.endpoints.products;

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
      .get<ProductsResponse>(`${this.msApiUrl}/${this.route}?${queryParams}`)
      .pipe(delay(500));
  }

  public getProduct(product_id: string): Observable<ProductItem> {
    return this.httpClient.get<ProductItem>(
      `${this.msApiUrl}/${this.route}/${product_id}`,
      {}
    );
  }

  public saveProduct(createProduct: CreateProduct): Observable<ProductItem> {
    return this.httpClient.post<ProductItem>(
      `${this.msApiUrl}/${this.route}`,
      createProduct
    );
  }

  public updateProduct(
    createProduct: CreateProduct,
    product_id: string
  ): Observable<ProductItem> {
    console.log({ ...createProduct, product_id });
    return this.httpClient.patch<ProductItem>(
      `${this.msApiUrl}/${this.route}/${product_id}`,
      createProduct
    );
  }

  public deleteProduct(product_id: string): Observable<ProductItem> {
    return this.httpClient.delete<ProductItem>(
      `${this.msApiUrl}/${this.route}/${product_id}`,
      {}
    );
  }
}
