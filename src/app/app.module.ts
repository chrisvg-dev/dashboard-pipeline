import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './data/maps/maps.component';
import { MainComponent } from './views/main/main.component';
import { MenuComponent } from './views/menu/menu.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { DatatableComponent } from './views/datatable/datatable.component';
import { ItemComponent } from './views/item/item.component';
import { AlcaldiasComponent } from './views/alcaldias/alcaldias.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    MainComponent,
    MenuComponent,
    DatatableComponent,
    ItemComponent,
    AlcaldiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
