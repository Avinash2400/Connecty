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
  Speed = 0;
  reviewForm;

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
    });
  }

  captureLocation() {
    this.locationService.detectLocation((pos) => {
      console.log(pos.coords);
      this.Coords = pos.coords;
      this.setLocation = true;
    });
  }

  submitReview() {
    let formdata = this.reviewForm.value;
    let data = {};
    data['speed'] = this.Speed;
    data['location'] = this.Coords;

    formdata.data = data;

    this.reviewService.addReview(formdata).subscribe((data) => {
      console.log(data);
      this.toastr.success('Reviews Posted!', 'Successfully!');
    });
  }
}
