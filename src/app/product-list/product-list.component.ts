import {Component,OnInit} from '@angular/core';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'products',
  templateUrl :'./product-list.component.html',
  styleUrls:['./product-list.component.css']
})
export class ProductListComponent{
  pageTitle: string = 'Product List';
  errorMessage:string;

  _listFilter: string;
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: any[];
  products: any[] =[];
	wishlist: any[] = [];
  cart: any[] = [];
  constructor(private _productService:ProductService){ }

  performFilter(filterBy:string):any[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:any)=>product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

  addWishList(product):void{
    this._productService.setWishlistProductsList(product.productId);
  	alert(product.productName + " is added to wishlist");
    this.wishlist.unshift(product);
  }

  ngOnInit(): void {
  	this._productService.getProducts()
      .subscribe(products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error); 

  }

  sortProductList(message: string) {
    console.log("hi" +message);
      if(message == "sortAsc"){
        console.log("sortAscending");
        this.products.sort(function(a,b){
          return a.price-b.price;
        });
      }
      
      if(message == "sortDesc"){
        this.products.sort(function(a,b){
          console.log("sortDesccending");
          return b.price-a.price;
        });
      }
  }
}
