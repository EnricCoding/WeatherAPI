import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ToastrService } from 'ngx-toastr';
import { Weather, WeatherLocation } from 'src/app/models/weather.model';
import { WeatherScreenPcService } from './services/weather-screen-pc.service';

@Component({
  selector: 'app-weather-screen-pc',
  templateUrl: './weather-screen-pc.component.html',
  styleUrls: ['./weather-screen-pc.component.scss']
})
export class WeatherScreenPcComponent implements OnInit {
  value:string = '';
  weatherList?:Weather = { }
  weatherLocation : Partial<WeatherLocation> = {}
  cityId:String = ''
  cityTemperature:any = null
  weatherLoaded:boolean = false

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  valueSpinner = 50
  loadingSpinner:boolean = false
  
  constructor(
    private _weatherService: WeatherScreenPcService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    
  }

  resetInfo(){
    this.value = ''
  }

  async sendUbication(){
    this.loadingSpinner = true
    this._weatherService.getInfoUbication(this.value).subscribe(async res => {
      if (res){
        try{

          for (var key in res) {
                console.log(key, res[key][0])
                this.weatherLocation = res[key][0]
                this.cityId = res[key][0].id
          }

          if(this.cityId){
          
            await this._weatherService.getWeatherData(this.cityId).subscribe(async res => {
             
              this.weatherList = res.current
              this.loadingSpinner = false
              this.weatherLoaded = true
              this.cityTemperature = this.weatherList?.temperature
              
              this.value = ''
              this.toastr.success('Busqueda completada', '', {
                timeOut: 3000,
              });
            })
          }
          }
        catch(error){
          this.loadingSpinner = false
          this.weatherLoaded = false
          this.toastr.error('Se ha producido un error', '', {
            timeOut: 3000,
          });
        }
      }
        
    })
  }
}
