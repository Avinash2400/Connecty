import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { LocationService } from 'src/app/services/location.service';
import { ReviewService } from 'src/app/services/review.service';
import { SpeedTestService } from 'src/app/services/speed-test.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  setLocation = false;
  setSpeed = false;
  Coords = {};
  Speed = '';
  reviewForm;

  options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['rgb(44, 151, 222)', 'lightgray'],
    arcDelimiters: [30],
    rangeLabel: ['0', '100'],
    needleStartValue: 50,
  };

  constructor(
    private speedService: SpeedTestService,
    private locationService: LocationService,
    private userService: UserService,
    private reviewService: ReviewService,
    private fb: FormBuilder,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.reviewForm = this.fb.group({
      title: '',
      description: '',
      data: Object,
      user: this.userService.currentUser._id,
      reply: Array,
      upvotes: Array,
      downvotes: Array,
      address: '',
      provider: '',
    });
  }

  captureLocation() {
    this.locationService.detectLocation((pos) => {
      this.Coords['logitude'] = pos.coords.longitude;
      this.Coords['latitude'] = pos.coords.latitude;
      console.log(this.Coords);
      this.setLocation = true;
    });
  }

  submitReview() {
    let formdata = this.reviewForm.value;
    let data = {};
    data['speed'] = this.Speed;
    data['location'] = this.Coords;
    data['provider'] = formdata.provider;
    data['address'] = formdata.address;

    formdata.data = data;
    console.log(data);

    this.reviewService.addReview(formdata).subscribe((data) => {
      console.log(data);
      this.toastr.success('Reviews Posted!', 'Successfully!');
    });
  }

  captureSpeed() {
    let downloadSize = 5340564;
    let start = new Date().getTime();
    this.speedService.testSpeed(() => {
      this.Speed = this.speedService.displaySpeed(
        start,
        new Date().getTime(),
        downloadSize
      );
      this.setSpeed = true;
    });
  }
}
