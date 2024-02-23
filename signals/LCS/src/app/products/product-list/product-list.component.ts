import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../product.service';
import { EMPTY, catchError, tap } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, ProductDetailComponent, AsyncPipe],
  templateUrl: './product-list.component.html',
  styles: ``,
})
export class ProductListComponent {
  // Just enough here for the template to compile
  pageTitle = 'Products';
  errorMessage = '';
  
  private productService = inject(ProductService);
  
  readonly products$ = this.productService.products$.pipe(
    tap((p) => console.log(JSON.stringify(p))),
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  )
  
  selectedProductId$ = this.productService.productSelected$;

  onSelected(productId: number): void {
    this.productService.producSelected(productId);
  }
}
