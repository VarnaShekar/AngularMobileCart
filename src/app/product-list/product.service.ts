import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {

  private _productUrl = 'https://api.myjson.com/bins/b3xqn';
  constructor(private _http:HttpClient) {}

  getProducts():Observable<any[]>{
    return this._http.get<any[]>(this._productUrl)
      .do(data=>console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }

  _wishlistProducts:any;
  getWishlistProductsList(){ 
    console.log("im in getWishlistProductsList - product.service : "+this._wishlistProducts);
      return this._wishlistProducts; 
  } 
  setWishlistProductsList(productId:number){
       console.log("im in setWishlistProductsList - product.service");
       this._wishlistProducts = productId;
  }
}
