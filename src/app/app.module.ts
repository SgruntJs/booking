import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { ChooseLanguageComponent } from './components/choose-language/choose-language.component';
import { ChooseChangeComponent } from './components/choose-change/choose-change.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChooseLanguageComponent,
    ChooseChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TooltipModule,
    DynamicDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ChooseChangeComponent]
})
export class AppModule { }
