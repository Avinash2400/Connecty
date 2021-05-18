import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  constructor() {}

  detectLocation() {
    navigator.geolocation.getCurrentPosition(
      this.success,
      (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      },
      this.options
    );
  }

  success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
}
