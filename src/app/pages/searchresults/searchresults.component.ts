import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, Observable, switchMap, toArray } from 'rxjs';
import { Hotel } from 'src/app/model/hotel.model';
import { HotelsService } from 'src/app/services/hotels/hotels.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss'],
})
export class SearchresultsComponent implements OnInit {
  hotels$!: Observable<Hotel[]>;

  where = '';
  guests!: number;

  constructor(
    private route: ActivatedRoute,
    private hotelsSrv: HotelsService
  ) {}

  ngOnInit() {
    this.where = this.route.snapshot.queryParamMap.get('where')!;
    this.guests = +this.route.snapshot.queryParamMap.get('guest')!;
    // this.route.queryParamMap.subscribe((data) => {
    //   console.log('data', data);
    // });
    this.getSearchList();
  }

  getSearchList() {
    this.hotels$ = this.hotelsSrv.getAllHotels().pipe(
      switchMap((res) => res),
      filter((item: any) => item.city === this.where),
      toArray()
    );
    this.hotels$.subscribe((res) => {
      console.log('res', res);
    });
  }
}
