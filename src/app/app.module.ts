import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CalendarModule} from 'angular-calendar';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {UserComponent} from './pages/user/user.component';
import {RouterModule} from '@angular/router';
import {SiteHeaderComponent} from './pages/site-header/site-header.component';
import {SiteFooterComponent} from './pages/site-footer/site-footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatPaginatorIntl,
} from '@angular/material';
import {CoachListitemComponent} from './pages/coach-listitem/coach-listitem.component';
import {StarRatingComponent} from './pages/star-rating/star-rating.component';
import {CoachProfileComponent} from './pages/coach-profile/coach-profile.component';
import { RechargeComponent } from './pages/recharge/recharge.component';$

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    UserComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    CoachListitemComponent,
    StarRatingComponent,
    CoachProfileComponent,
    RechargeComponent
  ],
  imports: [
    BrowserModule,
    [BrowserAnimationsModule, HttpClientModule],
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MDBBootstrapModule.forRoot(),
    CalendarModule.forRoot(),
    RouterModule.forRoot([
      {path: 'coach-profile', component: CoachProfileComponent, pathMatch: 'full'},
      {path: 'sign-up', component: SignUpComponent, pathMatch: 'full'},
      {path: 'login', component: LoginComponent, pathMatch: 'full'},
      {path: 'user', component: UserComponent, pathMatch: 'full'},
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'coach-listitem/:id', component: CoachListitemComponent, pathMatch: 'full'},
      {path: 'coach-listitem', component: CoachListitemComponent, pathMatch: 'full'},
      {path: 'rechargement-gc', component: RechargeComponent, pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {
}
