import { Product } from './../../models/products';
import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy{
  products: Product[];
  filteredProduct: any[];
  subscription: Subscription;
  constructor(private productService: ProductService) {
    this.subscription = productService.getAll().subscribe(p => this.filteredProduct = this.products = p);
  }

  ngOnInit() {
  }

  filter(query) {
    this.filteredProduct = (query) ? 
        this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
