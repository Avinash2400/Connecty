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
  url = app_config.api_url + '/';
  title = app_config.projectTitle;
  sidebarItems = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link: 'profile',
    },
    {
      title: 'Manage Users',
      icon: 'person-outline',
      link: 'manageuser',
    },
    {
      title: 'View Dashboard',
      icon: 'person-outline',
      link: 'dashboard',
    },
  ];
  constructor(
    private sidebar: NbSidebarService,
    public userService: UserService
  ) {}

  ngOnInit(): void {}
}
