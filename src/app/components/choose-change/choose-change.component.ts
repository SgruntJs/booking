import { Component } from '@angular/core';
import { filter, map, Observable, of, switchMap, toArray } from 'rxjs';
import { Change } from 'src/app/model/change';

@Component({
  selector: 'app-choose-change',
  templateUrl: './choose-change.component.html',
  styleUrls: ['./choose-change.component.scss']
})
export class ChooseChangeComponent {

  changes: Change[] = [
    {
      id: '1',
      value: "Baht thailandese", 
      code: "THB",
      isSuggested: false
    },
    {
      id: '2',
      value: "Euro", 
      code: "EUR",
      isSuggested: true
    },
    {
      id: '3',
      value: "Dollaro statunitense", 
      code: "USD",
      isSuggested: true
    },
    {
      id: '4',
      value: "Sterlina Britannica", 
      code: "GBP",
      isSuggested: true
    },
    {
      id: '5',
      value: "Real Brasiliano", 
      code: "BRL",
      isSuggested: true
    },
  ];

  changes$!: Observable<Change[]>
  suggestedChanges$!: Observable<Change[]>;
  allChanges$!: Observable<Change[]>;

  constructor() {
    this.changes$ = of(this.changes);
    this.getSuggestedChanges();
    this.getAllChanges();
  }

  getSuggestedChanges() {
    this.suggestedChanges$ = this.changes$.pipe(
      switchMap( res => res),
      filter(item => item.isSuggested === true),
      toArray()
    );
  }

  getAllChanges() {
    this.allChanges$ = this.changes$.pipe(
      switchMap( res => res),
      filter( item => item.isSuggested === false),
      toArray()
    )
  }

}
