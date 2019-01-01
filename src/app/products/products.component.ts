import { Product } from './../models/products';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products : Product[];
  categories$;
  category;
  filteredProduct: Product[];
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService : CategoryService) {

    productService.getAll().subscribe(product => this.filteredProduct = this.products = product);
    this.categories$ = categoryService.getCategories();

    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      this.filteredProduct = (this.category) ? 
        this.products.filter(p => p.category === this.category ): this.products;
   });
  }

  ngOnInit() {
  }

}
