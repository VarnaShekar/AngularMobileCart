import {Component, Output, EventEmitter} from '@angular/core';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'sort-dropdown',
  templateUrl: './sort-dropdown.component.html',
  styleUrls:['./sort-dropdown.component.css']
})
export class SortDropdownComponent {
	@Output() sortSelection: EventEmitter<string> = new EventEmitter<string>();

	sortIncreasing(){
		this.sortSelection.emit(`sortAsc`);
	}

	sortDecreasing(){
		this.sortSelection.emit(`sortDesc`);
	}
}






