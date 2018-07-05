import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RechargeComponent implements OnInit {

  packs = [
    {
      'name' : 'XS',
      'color': '#1faa00',
      'gc': '10',
      'price': '2'
    },
    {
      'name' : 'SM',
      'color': '#00bfa5',
      'gc': '30',
      'price': '5'
    },
    {
      'name' : 'MD',
      'color': '#2962ff',
      'gc': '100',
      'price': '15'
    },
    {
      'name' : 'LG',
      'color': '#aa00ff',
      'gc': '200',
      'price': '25'
    },
    {
      'name' : 'XL',
      'color': '#c51162',
      'gc': '300',
      'price': '30'
    },
    {
      'name' : 'XXL',
      'color': '#d50000',
      'gc': '500',
      'price': '50'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
