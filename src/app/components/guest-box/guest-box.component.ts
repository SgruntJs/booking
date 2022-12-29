import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-guest-box',
  templateUrl: './guest-box.component.html',
  styleUrls: ['./guest-box.component.scss']
})
export class GuestBoxComponent {

  numberAdults = 2;
  numberChildren = 0;
  numberRooms = 0;
  @Output() adults = new EventEmitter<number>();
  @Output() children = new EventEmitter<number>();
  @Output() rooms = new EventEmitter<number>();

  counter(action: string) {
    if (action === 'add') {
      this.numberAdults++;
    } else {
      this.numberAdults === 0 ? false : this.numberAdults--;
    }
    this.adults.emit(this.numberAdults);
  }
  counterChildren(action: string) {
    if (action === 'add') {
      this.numberChildren++;
    } else {
      this.numberChildren === 0 ? false : this.numberChildren--;
    }
    this.children.emit(this.numberChildren);
  }

  counterRooms(action: string) {
    if (action === 'add') {
      this.numberRooms++;
    } else {
      this.numberRooms === 0 ? false : this.numberRooms--;
    }
    this.rooms.emit(this.numberRooms);
  }

}
