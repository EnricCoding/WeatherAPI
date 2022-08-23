import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment, environmentInfoUbication } from 'src/environments/environment';
import { Weather, WeatherTotal } from 'src/app/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherScreenPcService {

  constructor(
    private http: HttpClient
  ) { }

  //getWeatherData(ubication: string){

  //}

  getWeatherData(cityId:any) {
    return this.http.get<any>(environment.weatherApiBaseUrl+cityId, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue)
     // params: new HttpParams()
     // .set('alt', cityName)
     // .set('units', 'metric')
     // .set('mode', 'json')
     // .set('mode', 'json')
    })//)
  }


  getInfoUbication(cityName: string){
  return this.http.get<any>(environmentInfoUbication.weatherApiBaseUrl+cityName+'?lang=es', {
      headers: new HttpHeaders()
      .set(environmentInfoUbication.XRapidAPIHostHeaderName, environmentInfoUbication.XRapidAPIHostHeaderValue)
      .set(environmentInfoUbication.XRapidAPIKeyHeaderName, environmentInfoUbication.XRapidAPIKeyHeaderValue)
     // params: new HttpParams()
     // .set('alt', cityName)
     // .set('units', 'metric')
     // .set('mode', 'json')
     // .set('mode', 'json')
    })//)

  }
}
