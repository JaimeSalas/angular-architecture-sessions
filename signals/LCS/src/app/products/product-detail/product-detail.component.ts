import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import {
  Component,
  inject,
} from '@angular/core';
import { Product } from '../product';
import { EMPTY, catchError } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe, AsyncPipe],
  templateUrl: './product-detail.component.html',
  styles: ``,
})
export class ProductDetailComponent {
  // Just enough here for the template to compile
  errorMessage = '';

  // Set the page title
  // pageTitle = this.product
  //   ? `Product Detail for: ${this.product.productName}`
  //   : 'Product Detail';
  pageTitle = 'Page Detail';

  private productService = inject(ProductService);
  product$ = this.productService.product$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  addToCart(product: Product) {}
}
