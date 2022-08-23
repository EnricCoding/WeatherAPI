import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherScreenPcComponent } from './weather-screen-pc.component';


const routes: Routes = [
  {
    path: '',
    component: WeatherScreenPcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherScreenPcRoutingModule {}