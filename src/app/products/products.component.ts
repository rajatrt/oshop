import { switchMap } from 'rxjs/operators';
import { Product } from './../models/products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products : Product[];
  category;
  filteredProduct: Product[];
  constructor(private route: ActivatedRoute,
    private productService: ProductService) {

    productService.getAll()
                  .pipe(switchMap( product => {
                          this.filteredProduct = this.products = product;
                          return route.queryParamMap
                  }))
                  .subscribe(params => {
                    this.category = params.get('category');
                    this.filteredProduct = (this.category) ?
                      this.products.filter(p => p.category === this.category ): this.products;
                 });
  }

  ngOnInit() {
  }

}
