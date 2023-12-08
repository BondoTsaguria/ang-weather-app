import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.weatherService
      .getWeatherData('tbilisi')
      .subscribe((res) => console.log(res));
  }
}
