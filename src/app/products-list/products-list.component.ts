import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ProductFilterPipe,
    ProductItemComponent,
    HighlightDirective
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  color = '#ffff66';

  protected headers = {
    description: 'Producto',
    price: 'Precio',
    available: 'Disponible',
    image: 'Imagen',
    rating: 'Valoración'
  };

  protected showImage = true;
  protected filterSearch = '';
  protected products: Product[] = [];

  constructor(private productService: ProductService, protected title: Title) { }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: prods => this.products = prods,
      error: err => console.error(err),
      complete: () => console.log('Productos obtenidos')
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
