import { Component, HostListener, OnInit, NgModule } from '@angular/core';
import { Product } from '../shared/products.interface';
import { ProductRepository } from '../product-repository.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  public products: Product[] = [];
  public selectedProduct: Product | null = null;

  constructor (private productRepository: ProductRepository) {}

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }

  onRowClick(product: Product) {
    if (!product.selected) {
      this.selectedProduct = this.selectedProduct === product ? null : product;
    }
  }

  closeMenu(): void {
    this.selectedProduct = null;
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    const clickedInsideTable = document.getElementById('product-table')?.contains(target);
    const clickedInsideSideMenu = document.querySelector('app-side-menu')?.contains(target);

    if (!clickedInsideTable && !clickedInsideSideMenu) {
      this.closeMenu();
    }
  }

}
