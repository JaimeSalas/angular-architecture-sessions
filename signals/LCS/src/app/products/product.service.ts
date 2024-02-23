import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  tap,
  catchError,
  of,
  throwError,
  EMPTY,
  map,
  switchMap,
  shareReplay,
  filter,
  combineLatest,
} from 'rxjs';
import { Product } from './product';
import { HttpErrorService } from '../utilities/http-error.service';
import { ReviewService } from '../reviews/review.service';
import { Review } from '../reviews/review';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';

  private http = inject(HttpClient);
  private errorService = inject(HttpErrorService);
  private reviewService = inject(ReviewService);

  private productSelectedSubject = new BehaviorSubject<number | undefined>(
    undefined
  );
  readonly productSelected$ = this.productSelectedSubject.asObservable();

  readonly products$ = this.http.get<Product[]>(this.productsUrl).pipe(
    tap((t) => console.log('http.get pipeline')),
    shareReplay(1),
    // tap(() => console.log('After shareReplay')),
    catchError((err) => this.handleError(err))
  );

  readonly product1$ = this.productSelected$.pipe(
    filter(Boolean),
    switchMap((id) => {
      const productUrl = `${this.productsUrl}/${id}`;
      return this.http.get<Product>(productUrl).pipe(
        tap((t) => console.log('http.get pipeline')),
        switchMap((p) => this.getProductsWithReviews(p)),
        tap((x) => console.log(x)),
        catchError((err) => this.handleError(err))
      );
    }),
    tap((x) => x)
  );

  product$ = combineLatest([this.productSelected$, this.products$]).pipe(
    tap((x) => x),
    map(([selectedProductId, products]) =>
      products.find((p) => p.id === selectedProductId)
    ),
    filter(Boolean),
    switchMap((p) => this.getProductsWithReviews(p)),
    catchError((err) => this.handleError(err))
  );

  // getProduct(id: number): Observable<Product> {
  //   const productUrl = `${this.productsUrl}/${id}`;

  //   return this.http.get<Product>(productUrl).pipe(
  //     tap((t) => console.log('http.get pipeline')),
  //     switchMap((p) => this.getProductsWithReviews(p)),
  //     tap((x) => console.log(x)),
  //     catchError((err) => this.handleError(err))
  //   );
  // }

  producSelected(selectedProductId: number): void {
    this.productSelectedSubject.next(selectedProductId);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    const formatted = this.errorService.formatError(err);
    return throwError(() => formatted);
  }

  private getProductsWithReviews(product: Product): Observable<Product> {
    if (product.hasReviews) {
      return this.http
        .get<Review[]>(this.reviewService.getReviewUrl(product.id))
        .pipe(
          map(
            (reviews) =>
              ({
                ...product,
                reviews,
              } as Product)
          )
        );
    }

    return of(product);
  }
}
