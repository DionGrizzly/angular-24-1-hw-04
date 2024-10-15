import { Component, Input } from '@angular/core';
import { Product } from '../shared/products.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  @Input() product!: Product;
}
