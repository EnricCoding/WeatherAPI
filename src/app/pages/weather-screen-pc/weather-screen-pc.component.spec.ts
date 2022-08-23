import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherScreenPcComponent } from './weather-screen-pc.component';

describe('WeatherScreenPcComponent', () => {
  let component: WeatherScreenPcComponent;
  let fixture: ComponentFixture<WeatherScreenPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherScreenPcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherScreenPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
