import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentDateComponent } from './current-date/current-date.component';
import { CurrentHourComponent } from './current-hour/current-hour.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentDateComponent,
    CurrentHourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
