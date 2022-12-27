import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  searchForm!: FormGroup; 

}
