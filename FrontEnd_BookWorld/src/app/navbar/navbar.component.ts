import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuOpener: boolean = true;
  menuOpenerBtn() {
    this.menuOpener = !this.menuOpener;
  }

  searchkeyfromSearchBar: any = '';
  constructor(private productServ: ProductService) {}

  ngOnInit(): void {
    console.log(this.searchkeyfromSearchBar);
  }
  serchData(search: any) {
    this.searchkeyfromSearchBar = search.value;
    console.log(this.searchkeyfromSearchBar);

    //passing value
    this.productServ.keyfromSearchBar.next(this.searchkeyfromSearchBar);
  }
}
