import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-guest-box',
  templateUrl: './guest-box.component.html',
  styleUrls: ['./guest-box.component.scss'],
})
export class GuestBoxComponent {
  numberAdults = 2;
  numberChildren = 0;
  numberRooms = 1;
  @Output() adults = new EventEmitter<number>();
  @Output() children = new EventEmitter<number>();
  @Output() rooms = new EventEmitter<number>();
  elements: Array<any> = [];

  ages = [...Array(18).keys()];

  counter(action: string) {
    if (action === 'add') {
      this.numberAdults++;
    } else {
      this.numberAdults === 1 ? false : this.numberAdults--;
    }
    this.adults.emit(this.numberAdults);
  }
  counterChildren(action: string) {
    if (action === 'add') {
      this.numberChildren++;
      this.appendElement();
    } else {
     
      this.numberChildren === 0 ? false : this.numberChildren--;
      this.removeElement();
    }
    this.children.emit(this.numberChildren);
  }

  counterRooms(action: string) {
    if (action === 'add') {
      this.numberRooms++;
    } else {
      this.numberRooms === 1 ? false : this.numberRooms--;
    }
    this.rooms.emit(this.numberRooms);
  }

  appendElement(): void {
    this.elements = [...this.elements, this.elements.length + 1];
  }

  removeElement(): void {
    this.elements.pop();
  }
}
