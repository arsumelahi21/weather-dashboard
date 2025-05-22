import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather/weather.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WeatherComponent, 
      ],
      providers: [
        provideHttpClient(),       
        provideHttpClientTesting(), 
        WeatherService              
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
