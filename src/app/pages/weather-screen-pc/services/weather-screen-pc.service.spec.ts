import { TestBed } from '@angular/core/testing';

import { WeatherScreenPcService } from './weather-screen-pc.service';

describe('WeatherScreenPcService', () => {
  let service: WeatherScreenPcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherScreenPcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
