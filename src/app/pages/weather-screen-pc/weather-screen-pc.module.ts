import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from 'src/app/app.component';
import { WeatherScreenPcComponent } from './weather-screen-pc.component';
import { WeatherScreenPcRoutingModule } from './weather-screen-pc.routing.module';



@NgModule({
  declarations: [
   // WeatherScreenPcRoutingModule,
   
  ],
  imports: [
    BrowserModule,
    WeatherScreenPcComponent,
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class WeatherScreenPcModule { }
