import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from 'src/app/model/city.model';
import { CitiesService } from 'src/app/services/cities/cities.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements AfterViewInit {
  rangeDates!: Date[];
  minDate!: Date;
  searchForm!: FormGroup;
  show = false;
  numberAdults = 2;
  numberChildren = 0;
  numberRooms = 1;

  filteredCountries!: any[];

  cities: City[] = [];
 

  constructor(private router: Router, private route: ActivatedRoute, private citySrv: CitiesService) {}

  ngOnInit() {
    this.minDate = new Date();
    this.searchForm = new FormGroup({
      where: new FormControl('', [Validators.required]),
      rangeDates: new FormControl('', [Validators.required]),
      adults: new FormControl('', [Validators.required]),
      children: new FormControl('', []),
      rooms: new FormControl('', [Validators.required]),
    });

    this.citySrv.getAllCities().subscribe( res => {
      this.cities = res;
    })
  }

  onSubmit() {
    console.log('search', this.searchForm.value);
    const where = this.searchForm.value.where.name;
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

  updateRooms(num: number) {
    this.numberRooms = num;
  }

  ngAfterViewInit() {}

  suggest(e: Event) {
    console.log((<HTMLInputElement>e.target).value);
  }

  filterCountry(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.cities.length; i++) {
      let country = this.cities[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
}
