import {Component, OnInit, ViewEncapsulation, PLATFORM_ID, Inject, Injectable} from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ApiService} from '../../services/api-service.service';

declare var jquery: any;
declare var $: any;

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
  encapsulation: ViewEncapsulation.None,
  providers: [
    ApiService
  ]
})
export class SiteHeaderComponent implements OnInit {
  /* Game Coach */
  selected = 'option2';
  siteName = 'e-Coach';
  selection: String = 'home';
  menuOpen = false;
  isConnected = false;
  connError = false;
  connectedUser;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
  username: string;
  password: string;
  passwordConn: string;
  email: string;
  emailConn: string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private route: Router, private apiService: ApiService) {
    this.connectedUser = localStorage.getItem('connectedUser') && JSON.parse(localStorage.getItem('connectedUser'));
    if (this.connectedUser !== null) {
      this.isConnected = true;
    }
  }


  ngOnInit() {
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

  logout() {
    localStorage.clear();
    this.isConnected = false;
    this.connectedUser = {};
  }

  connexion() {
    this.apiService.postLogin({
      'email': this.emailConn,
      'password': this.passwordConn
    }).subscribe(data => {
      console.log(data);
      if (data !== 403) {
        $('#modalCon').modal('hide');
        this.isConnected = true;
        this.connectedUser = data;
        localStorage.setItem('connectedUser', JSON.stringify(data));
      } else {
        this.connError = true;
        console.log('Error');
      }
    });
  }

  inscription() {
    console.log('toto');
    /*this.variables.setName(this.username);
    this.variables.setPassword(this.password);
    this.variables.setEmail(this.email);
    this.isConnected = true;*/
    this.apiService.postRegister({
      'username': this.username,
      'email': this.email,
      'password': this.password
    });
  }
}
