import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  numberAdults = 2;
  numberChildren = 0;
  numberRooms = 1;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.minDate = new Date();
    this.searchForm = new FormGroup({
      where: new FormControl('', [Validators.required]),
      rangeDates: new FormControl('', [Validators.required]),
      adults: new FormControl('', [Validators.required]),
      children: new FormControl('', []),
      rooms: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log('search', this.searchForm.value);
    const where = this.searchForm.value.where;
    const guest = this.searchForm.value.adults;
    this.router.navigateByUrl(`/searchresults?where=${where}&guests=${guest}`);
  }

  showGuestBox() {
    this.show = !this.show;
  }


  updateAdults(num: number) {
    this.numberAdults = num;
  }

  updateChildren(num: number) {
    this.numberChildren = num;
  }

  updateRooms(num: number){
    this.numberRooms = num;
  }



}
