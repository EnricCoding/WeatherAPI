import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'weather-screen-pc',
    redirectTo: '/weather-screen-pc',
    pathMatch: 'full',
   // loadChildren: () => import('./pages/weather-screen-pc/weather-screen-pc.module').then(m => m.WeatherScreenPcModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
