import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {ReactiveFormsModule} from "@angular/forms"; 

import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {CalendarModule} from 'primeng/calendar';
import { ChooseLanguageComponent } from './components/choose-language/choose-language.component';
import { ChooseChangeComponent } from './components/choose-change/choose-change.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { GuestBoxComponent } from './components/guest-box/guest-box.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchresultsComponent } from './pages/searchresults/searchresults.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChooseLanguageComponent,
    ChooseChangeComponent,
    NavComponent,
    HomeComponent,
    HeroComponent,
    SearchbarComponent,
    GuestBoxComponent,
    SearchresultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TooltipModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ChooseChangeComponent]
})
export class AppModule { }
