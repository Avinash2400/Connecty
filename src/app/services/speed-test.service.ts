import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpeedTestService {
  fileToTest =
    'https://github.com/m-triple-m/test-repo/raw/main/speed_test.jpg';
  constructor() {}

  testSpeed(onload) {
    var time_start, end_time;

    // The size in bytes
    
    var downloadImgSrc = new Image();


    time_start = new Date().getTime();
    downloadImgSrc.src = this.fileToTest;

    console.log('time start: ' + time_start);
    return downloadImgSrc.onload = onload;
    
  }

  displaySpeed(time_start, end_time, downloadSize) {
    let timeDuration = (end_time - time_start) / 1000;
    let loadedBits = downloadSize * 8;

    /* Converts a number into string
       using toFixed(2) rounding to 2 */
    let bps = parseFloat((loadedBits / timeDuration).toFixed(2));
    let speedInKbps = parseFloat((bps / 1024).toFixed(2));
    let speedInMbps = (speedInKbps / 1024).toFixed(2);
    
    // console.log(
    //   'Your internet connection speed is: \n' +
    //     bps +
    //     ' bps\n' +
    //     speedInKbps +
    //     ' kbps\n' +
    //     speedInMbps +
    //     ' Mbps\n'
    // );

    return speedInMbps;
  }
}
