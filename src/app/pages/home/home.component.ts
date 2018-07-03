import {Component, OnInit, ViewEncapsulation} from '@angular/core';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $('.carousel').carousel({
      interval: 2000
    })
  }

}
