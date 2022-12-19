import { Component } from '@angular/core';
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
  ];

}
