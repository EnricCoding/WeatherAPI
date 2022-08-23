// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// https://community-open-weather-map.p.rapidapi.com/weather
export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://foreca-weather.p.rapidapi.com/current/',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'foreca-weather.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: 'c6b2b2315amsh9c02e86b851908ap13e89ajsn0b0f9a0740d2'
};

export const environmentInfoUbication = {
  production: false,
  weatherApiBaseUrl: 'https://foreca-weather.p.rapidapi.com/location/search/',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'foreca-weather.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: 'c6b2b2315amsh9c02e86b851908ap13e89ajsn0b0f9a0740d2'

}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
