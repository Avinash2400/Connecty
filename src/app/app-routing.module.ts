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
import { SearchLocationComponent } from './search-location/search-location.component';
import { ManageReviewsComponent } from './manage-reviews/manage-reviews.component';
import { AddQueryComponent } from './user/add-query/add-query.component';
import { ViewQueriesComponent } from './view-queries/view-queries.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { LoginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminLayout,
    children: [{ path: 'dashboard', component: DashboardComponent }],
    canActivate: [AdminGuard],
  },
  {
    path: 'user',
    component: UserLayout,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'addreview', component: AddReviewComponent },
      { path: 'managereview', component: ManageReviewsComponent },
      { path: 'addquery', component: AddQueryComponent },
    ],
    canActivate: [LoginGuard],
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'reset', component: ResetPasswordComponent },
    ],
  },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'search', component: SearchLocationComponent },
      { path: 'listquery', component: ViewQueriesComponent },
      // { path: 'listreview', component: listrevi },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
