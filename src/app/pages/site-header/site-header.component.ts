import {Component, OnInit, ViewEncapsulation, PLATFORM_ID, Inject, Injectable} from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';

import * as $ from 'jquery';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SiteHeaderComponent implements OnInit {
  /* Game Coach */
  selected = 'option2';
  siteName = "e-Coach";
  selection: String = 'home';
  menuOpen = false;
  isConnected = false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private route: Router) {
  }

  username = '';
  password = '';
  email = '';

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      $(window).on('scroll touchmove', function () {
        if ($(window).scrollTop() >= 1) {
          $('.header').addClass('scrolled');
        } else {
          $('.header').removeClass('scrolled');
        }
      });
      $('.ion-ios-navicon').on('click', function () {
        $('.sidebar').addClass('active');
        $('.sidebar-overlay').addClass('fadeIn');
      });
      $('.sidebar-overlay').on('click', function () {
        $('.sidebar-overlay').removeClass('fadeIn');
        $('.sidebar-overlay').addClass('fadeOut');
        $('.sidebar').removeClass('active');
      });
    }
  }

  select(item) {
    console.log(this.selection, item);
    this.selection = item;
    /*this.variables.setPage(item);*/
    this.menuOpen = false;
    /*
    this.variables.setMenuOpen(false);
        console.log('selected !!!', this.selection);
    */
  }

  navigateToUser() {
    this.route.navigate(['app-user-page']);
    // this.route.navigate(['item-details', stoId]);
  }

  inscription() {
    /*this.variables.setName(this.username);
    this.variables.setPassword(this.password);
    this.variables.setEmail(this.email);
    this.isConnected = true;*/
  }

}
