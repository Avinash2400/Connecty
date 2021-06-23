import { Component } from '@angular/core';
import { LocationService } from './services/location.service';
import { SpeedTestService } from './services/speed-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'masterTemplate';

  constructor(
    private locationService: LocationService,
    private speedtestService: SpeedTestService
  ) {}

}
