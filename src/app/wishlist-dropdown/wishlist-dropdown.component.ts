import {Component} from '@angular/core';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'wishlist-downdown',
  templateUrl :'./wishlist-dropdown.component.html',
  styleUrls:['./wishlist-dropdown.component.css']
})
export class WishlistDropdownComponent{

  selectedId:number;
  products: any[];
  product_el:any;
  errorMessage:string;
  wishList:any[]=[];
  isWishlistEmpty: boolean;

  constructor(private _productService:ProductService){ }

  ngOnInit() {
    this._productService.getProducts()
                        .subscribe(products => {
                          this.products = products;
                        },
                        error => this.errorMessage = <any>error); 

  }

  renderWishList() {
    this.isWishlistEmpty = false;
    let currentId = this._productService.getWishlistProductsList();
    if(currentId == undefined){
      this.isWishlistEmpty = !this.isWishlistEmpty;
    }
    console.log("this.isWishlistEmpty? " + this.isWishlistEmpty);
    this.products.forEach(el => {
              if(el.productId === currentId) {
                  this.wishList.push(el);
                  console.log('im renderWishList - wishlist-dropdown');
            }
    });
  }

  clearWishList():void{
                  this.wishList = [];
                  console.log('im clearWishList - wishlist-dropdown');
                  //this.renderWishList();
  }
}