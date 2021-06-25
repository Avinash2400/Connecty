import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { app_config } from 'src/config';
import Swal from 'sweetalert2';
import { ReviewService } from '../services/review.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-manage-reviews',
  templateUrl: './manage-reviews.component.html',
  styleUrls: ['./manage-reviews.component.css'],
})
export class ManageReviewsComponent implements OnInit {
  reviewList: any;
  loading = true;
  url = app_config.api_url + '/';

  constructor(
    public userService: UserService,
    private router: Router,
    private reviewService: ReviewService,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.fetchVideos();
  }

  fetchVideos() {
    this.reviewService
      .getByUser(this.userService.currentUser._id)
      .subscribe((res) => {
        this.reviewList = res;
        this.loading = false;
        console.log(this.reviewList);
      });
  }

  deleteVideo(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.reviewService.deleteReview(id).subscribe((res) => {
          console.log(res);
          this.toastrService.info('Review Deleted!', 'Successfully!');
          this.fetchVideos();
        });
      }
    });
  }

  updateUser(id) {}
}
