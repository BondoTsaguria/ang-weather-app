import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl: string = 'https://open-weather-map27.p.rapidapi.com/weather';
  xRapidApiHostHeaderName: string = 'X-RapidAPI-Host';
  xRapidApiHostHeaderValue: string = 'open-weather-map27.p.rapidapi.com';
  xRapidApiKeyHeaderName: string = 'X-RapidAPI-Key';
  xRapidApiKeyHeadervalue: string =
    '695e00407amsh3363a3513551562p12a153jsnbef36070fbf4';
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) {
    this.http.get(this.baseUrl, {
      headers: new HttpHeaders()
        .set(this.xRapidApiHostHeaderName, this.xRapidApiHostHeaderValue)
        .set(this.xRapidApiKeyHeaderName, this.xRapidApiKeyHeadervalue),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json'),
    });
  }
}
