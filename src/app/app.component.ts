import { Component, VERSION } from '@angular/core';
import { PRODUCTS } from './data';
import { Product } from './model/Product';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Television = PRODUCTS[0];
  // BluerayPlayer = PRODUCTS[1];
  // GameConsole = PRODUCTS[2];
  // MobilePhone = PRODUCTS[3];

  productList: Product[] = PRODUCTS;
}
