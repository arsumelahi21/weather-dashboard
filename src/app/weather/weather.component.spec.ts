import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { WeatherService } from '../weather.service';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherComponent],
      providers: [
        WeatherService,              
        provideHttpClient(),          
        provideHttpClientTesting()   
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render forecast data correctly', () => {
    const testForecast = [
      {
        dt_txt: '2025-05-23 12:00:00',
        main: { temp: 22 },
        weather: [{ main: 'Clouds', icon: '02d' }],
      },
      {
        dt_txt: '2025-05-24 12:00:00',
        main: { temp: 24 },
        weather: [{ main: 'Rain', icon: '10d' }],
      },
      {
        dt_txt: '2025-05-25 12:00:00',
        main: { temp: 26 },
        weather: [{ main: 'Clear', icon: '01d' }],
      },
    ];

    const testCity = {
      name: 'Testville',
      main: { temp: 20 },
      weather: [{ main: 'Sunny', icon: '01d' }],
      forecast: testForecast,
    };

    component.cities = [testCity];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const forecastItems = compiled.querySelectorAll('.grid .bg-blue-50');

    expect(forecastItems.length).toBe(3);
    expect(forecastItems[0].textContent).toContain('Fri'); 
    expect(forecastItems[1].textContent).toContain('Sat');
    expect(forecastItems[2].textContent).toContain('Sun');
  });
  
});
