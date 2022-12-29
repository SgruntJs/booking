import { Component } from '@angular/core';

@Component({
  selector: 'app-guest-box',
  templateUrl: './guest-box.component.html',
  styleUrls: ['./guest-box.component.scss']
})
export class GuestBoxComponent {

  numberAdults = 0;

  counter(action: string) {
    if (action === 'add') {
      this.numberAdults++;
    } else {
      this.numberAdults === 0 ? false : this.numberAdults--;
    }
  }

}
