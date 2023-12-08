import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/shared/interfaces/weather';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  weatherData!: WeatherData;
  cityName: string = 'tbilisi';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe((res) => {
      console.log(res);
      this.weatherData = res;
    });
  }
}
