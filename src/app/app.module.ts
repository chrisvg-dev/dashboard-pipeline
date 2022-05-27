import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './data/maps/maps.component';
import { MainComponent } from './views/main/main.component';
import { MenuComponent } from './views/menu/menu.component';

import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    MainComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
