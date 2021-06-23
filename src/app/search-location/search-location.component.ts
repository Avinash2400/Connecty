import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { ReviewService } from '../services/review.service';

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
    private toastr: NbToastrService
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
}
