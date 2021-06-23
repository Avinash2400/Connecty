import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbToastrModule,
} from '@nebular/theme';
import { LayoutComponent as AdminLayout } from './admin/layout/layout.component';
import { LayoutComponent as UserLayout } from './user/layout/layout.component';
import { LayoutComponent as AppLayout } from './authentication/layout/layout.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NebularModule } from './modules/nebular/nebular.module';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { MainLayoutComponent } from './main/main-layout/main-layout.component';
import { AddReviewComponent } from './main/add-review/add-review.component';
import { HomeComponent } from './home/home.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchLocationComponent } from './search-location/search-location.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { GaugeChartModule } from 'angular-gauge-chart';
import { ManageReviewsComponent } from './manage-reviews/manage-reviews.component';
import { AddQueryComponent } from './user/add-query/add-query.component';
import { ViewQueriesComponent } from './view-queries/view-queries.component';
import { ReviewDetailsComponent } from './main/review-details/review-details.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayout,
    UserLayout,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent,
    AppLayout,
    MainLayoutComponent,
    AddReviewComponent,
    HomeComponent,
    SearchLocationComponent,
    ManageReviewsComponent,
    AddQueryComponent,
    ViewQueriesComponent,
    ReviewDetailsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NebularModule,
    SweetAlert2Module,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbToastrModule.forRoot(),
    GaugeChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
