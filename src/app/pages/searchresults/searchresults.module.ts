import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from 'src/app/components/hotel-list/hotel-list.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { HotelCardComponent } from 'src/app/components/hotel-card/hotel-card.component';
import { SearchresultsRoutingModule } from './searchresults-routing.module';
import { SearchresultsComponent } from './searchresults.component';

@NgModule({
  declarations: [
    HotelListComponent,
    SidebarComponent,
    HotelCardComponent,
    SearchresultsComponent
  ],
  imports: [
    CommonModule, SearchresultsRoutingModule
  ]
})
export class SearchresultsModule { }
