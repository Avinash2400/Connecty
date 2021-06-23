import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { QueryService } from 'src/app/services/query.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-query',
  templateUrl: './add-query.component.html',
  styleUrls: ['./add-query.component.css'],
})
export class AddQueryComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  posts = [];

  constructor(
    private toastr: NbToastrService,
    private queryService: QueryService,
    private userservice: UserService
  ) {}

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent,
      user: this.userservice.currentUser._id,
    };
    this.queryService.addQuery(post).subscribe((res) => {
      console.log(res);
      this.toastr.success('Request Added', 'Successfully!');
    });
  }

  ngOnInit(): void {
    document
      .getElementsByTagName('nb-layout-column')[0]
      .classList.add('register');
  }

  ngOnDestroy() {
    document
      .getElementsByTagName('nb-layout-column')[0]
      .classList.remove('register');
  }
}
