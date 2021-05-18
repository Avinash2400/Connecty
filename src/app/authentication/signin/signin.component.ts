import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
}) 
export class SigninComponent implements OnInit {
  signinform: any;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initSigninForm();
  }

  initSigninForm() {
    this.signinform = this.fb.group({
      email: '',
      password: '',
    });
  }

  submitSigninForm() {
    let formdata = this.signinform.value;

    this.userService.getUserByEmail(formdata.email).subscribe((userdata) => {
      if (userdata) {
        if (userdata['password'] == formdata['password']) {
          Swal.fire({
            icon: 'success',
            title: 'Great!',
            text: 'Successfully Loggedin',
          }).then(() => {
            this.userService.loggedin = true;
            sessionStorage.setItem('user', JSON.stringify(userdata));
            this.userService.currentUser = userdata;

            if (userdata['isadmin']) {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/user']);
            }
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: "Email and Password does't match",
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: "Email and Password does't match",
        });
      }
    });
  }
}
