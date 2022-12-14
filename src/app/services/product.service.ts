import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { map, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get a list of products from data.json
   * @returns a list of products
   */
  getProducts(): Observable<Product[]> {
    //TODO: get from database via API endpoint
    return this.httpClient.get<[]>('assets/data.json');
  }
  /**
   * Get a single product by ID.
   * @param id the Product ID
   * @returns product or undefined if not found.
   */
  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products: Product[]) => products.find((prod) => prod.id === id)!)
    );
  }
}
