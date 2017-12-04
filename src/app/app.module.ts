import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WishlistDropdownComponent } from './wishlist-dropdown/wishlist-dropdown.component';
import { SortDropdownComponent } from './sort-dropdown/sort-dropdown.component';

import { ProductService } from './product-list/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WishlistDropdownComponent,
    SortDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
