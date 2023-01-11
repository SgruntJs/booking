import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
  providers: [DialogService, MessageService],
})
export class HotelListComponent {

  @Input() location!: string;
  ref!: DynamicDialogRef;

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  show() {
    this.ref = this.dialogService.open(MapComponent, {
      width: '90%',
      height: '90%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
    });

  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
  
}
