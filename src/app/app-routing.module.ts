import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LayoutComponent as AdminLayout } from './admin/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent as UserLayout } from './user/layout/layout.component';
import { LayoutComponent } from './authentication/layout/layout.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { MainLayoutComponent } from './main/main-layout/main-layout.component';
import { AddReviewComponent } from './main/add-review/add-review.component';

const routes: Routes = [
  { path: '', redirectTo: '/app/signin', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminLayout,
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },
  {
    path: 'user',
    component: UserLayout,
    children: [],
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'addreview', component: AddReviewComponent },
      // { path: 'listreview', component: listrevi },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
