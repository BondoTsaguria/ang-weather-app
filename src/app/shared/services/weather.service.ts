import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../interfaces/weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl: string = 'https://open-weather13.p.rapidapi.com/city';
  options = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '695e00407amsh3363a3513551562p12a153jsnbef36070fbf4',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
    }),
  };

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    // Append the city name as a parameter
    const params = new HttpParams().set('q', cityName);

    // Use the options with headers and append the params
    const requestOptions = { ...this.options, params };

    // Use dynamic URL by appending the city name to the baseUrl
    return this.http.get<WeatherData>(
      `${this.baseUrl}/${cityName}`,
      requestOptions
    );
  }
}
