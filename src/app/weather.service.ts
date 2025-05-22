import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiKey = '7364afebb0835b5c86868e5cbba421c9';
  private baseUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.baseUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).pipe(
      catchError(err => throwError(() => new Error('City not found')))
    );
  }

  getForecast(city: string): Observable<any> {
    const url = `${this.baseUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).pipe(
      catchError(() => throwError(() => new Error('Forecast not found')))
    );
  }
}
