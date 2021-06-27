import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { ReviewService } from '../services/review.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css'],
})
export class SearchLocationComponent implements OnInit {
  reviewList;
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
    private reviewService: ReviewService,
    private toastr: NbToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.fetchReviews();
  }

  fetchReviews() {
    this.reviewService.getAll().subscribe((data) => {
      console.log(data);
      this.reviewList = data;
    });
  }

  addUpvote(index) {
    let review = this.reviewList[index];
    if (this.userService.loggedin) {
      if (!review.upvotes.includes(this.userService.currentUser._id)) {
        this.reviewService
          .addUpdate(review._id, { upvotes: this.userService.currentUser._id })
          .subscribe((res) => {
            this.fetchReviews();
          });
      }
    }
  }

  addDownvote(index) {
    let review = this.reviewList[index];
    if (this.userService.loggedin) {
      if (!review.downvotes.includes(this.userService.currentUser._id)) {
        this.reviewService
          .addUpdate(review._id, {
            downvotes: this.userService.currentUser._id,
          })
          .subscribe((res) => {
            this.fetchReviews();
          });
      }
    }
  }

  getURL(location) {
    console.log(
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d' +
        location.latitude +
        '!3d' +
        location.logitude +
        '!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621'
    );
    return (
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d' +
      location.latitude +
      '!3d' +
      location.logitude +
      '!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621'
    );
  }
}
