import { Component, OnInit } from '@angular/core';
import { ApiService, Product } from './services/api.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Product List</h1>
    <h1>Ahoj</h1>
    <ul>
      <li *ngFor="let product of products">
        <strong>{{ product.name }}</strong>: {{ product.price | currency }} (Created: {{ product.createdDate | date:'short' }})
      </li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent implements OnInit {
  products: Product[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
}
