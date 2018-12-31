import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories();

    this.id = route.snapshot.paramMap.get('id');
    if(this.id) productService.get(this.id).pipe(take(1)).subscribe(product => this.product = product);

  }

  ngOnInit() {
  }

  save(product) {
    if(this.id) this.productService.update(this.id,product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete(productId) {
    if(!confirm("Are you sure you want to delete this item")) return false

    this.productService.delete(productId);
    this.router.navigate(['/admin/products']);
  }


}
