import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$;
  categories$;
  constructor(private productService: ProductService, private categoryService : CategoryService) {
    this.products$ = productService.getAll();
    this.categories$ = categoryService.getCategories();
   }

  ngOnInit() {
  }

}
