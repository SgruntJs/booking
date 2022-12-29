import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  rangeDates!: Date[];
  minDate!: Date;
  searchForm!: FormGroup;
  show = false;
  numberAdults = 0;

  ngOnInit() {
    this.minDate = new Date();
    this.searchForm = new FormGroup({
      where: new FormControl('', [Validators.required]),
      rangeDates: new FormControl('', [Validators.required]),
      adults: new FormControl('', [Validators.required]),
      children: new FormControl('', [Validators.required]),
      rooms: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log('search', this.searchForm.value);
  }

  showGuestBox() {
    this.show = !this.show;
  }


}
