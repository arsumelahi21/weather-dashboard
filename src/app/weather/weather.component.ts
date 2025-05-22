import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cityInput = '';
  error = '';
  loading = false;
  cities: any[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    const saved = localStorage.getItem('cities');
    if (saved) this.cities = JSON.parse(saved);
  }

  saveToLocalStorage() {
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }

  addCity() {
    if (!this.cityInput.trim()) return;

    this.loading = true;
    this.weatherService.getCurrentWeather(this.cityInput).subscribe({
      next: (data) => {
        this.weatherService.getForecast(this.cityInput).subscribe({
          next: (forecast) => {
            const forecastItems = forecast.list.filter((item: any) =>
              item.dt_txt.includes('12:00:00')
            ).slice(0, 3);
            data.forecast = forecastItems;
            this.cities.push(data);
            this.cityInput = '';
            this.error = '';
            this.loading = false;
            this.saveToLocalStorage();
          },
          error: () => {
            this.error = 'Forecast error';
            this.loading = false;
          }
        });
      },
      error: () => {
        this.error = 'City not found';
        this.loading = false;
      }
    });
  }

  removeCity(index: number) {
    this.cities.splice(index, 1);
    this.saveToLocalStorage();
  }
}
