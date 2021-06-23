import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { UserService } from 'src/app/services/user.service';
import { app_config } from 'src/config';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  sidebarItems = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link: 'profile',
    },
    {
      title: 'Manage Your Reviews',
      icon: 'person-outline',
      link: 'managereview',
    },
    {
      title: 'Add new Review',
      icon: 'person-outline',
      link: 'addreview',
    },
    {
      title: 'Add Query',
      icon: 'person-outline',
      link: 'addquery',
    },
  ];
  url = app_config.api_url + '/';
  title = app_config.projectTitle;
  currentUser: any;
  constructor(
    private sidebar: NbSidebarService,
    public userService: UserService
  ) {
    this.currentUser = userService.currentUser;
  }

  ngOnInit(): void {}

  toggleSidebar() {}
}
