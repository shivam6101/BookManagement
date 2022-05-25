import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product';

import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private productService: ProductService) {}

  categaryList: Product | any;

  filtered: Product | any;
  filteredAuthor: Product | any;

  searchVal: string = '';

  getCatagory(v: any) {
    console.log(v);
    this.searchVal = v;
    this.productService.searchkeyfromcategory.next(this.searchVal);
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res) => {
      //console.log(res);
      this.categaryList = res;

      //filtering by author
      this.filteredAuthor = this.categaryList.filter(
        (
          (s) =>
          ({ authorName }: { authorName: any }) =>
            !s.has(authorName) && s.add(authorName)
        )(new Set())
      );
      console.log('authorName' + this.filteredAuthor);

      //filtering by category
      this.filtered = this.categaryList.filter(
        (
          (s) =>
          ({ category }: { category: any }) =>
            !s.has(category) && s.add(category)
        )(new Set())
      );
      console.log('category' + this.filtered);
    });
  }

  // showDataByCategory(v: any) {
  //   this.productService.getAllProducts().subscribe((res) => {
  //     this.categaryList = res;
  //     //console.log(this.categaryList);
  //   });
  // }
}
