import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ChooseChangeComponent } from '../choose-change/choose-change.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService, MessageService],
})
export class HeaderComponent {
  constructor(
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  ref!: DynamicDialogRef;

  show() {
    this.ref = this.dialogService.open(ChooseChangeComponent, {
      header: 'Seleziona la valuta',
      width: '70%',
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
