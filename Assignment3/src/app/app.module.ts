import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {HomeComponent} from './app.home';
import {AboutComponent} from './app.about';
import {DetailComponent} from './app.detail';
import {DefaultComponent} from  './app.pagedefault';
import {routing} from './app.routing';


@NgModule({
  imports: [BrowserModule, routing],
  declarations: [AppComponent, DefaultComponent, HomeComponent, AboutComponent, DetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
