import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  rangeDates!: Date[];

  searchForm!: FormGroup; 

  ngOnInit() {
    this.searchForm = new FormGroup({
      "where": new FormControl('', [Validators.required]),
      "rangeDates": new FormControl('', [Validators.required])
    })
  }

}
