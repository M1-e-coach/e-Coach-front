import {Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {
  CalendarEvent,
  DAYS_OF_WEEK,
  CalendarEventTitleFormatter
} from 'angular-calendar';
import {CustomEventTitleFormatter} from './../../services/custom-event-title-formatter.provider';
import {CustomDateFormatter} from './../../services/custom-date-formatter.provider';
import {ApiService} from '../../services/api-service.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [
    {
      provide: CustomDateFormatter,
      useClass: CustomDateFormatter
    },
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter
    },
    ApiService
  ]
})
export class UserComponent implements OnInit, AfterViewInit {
  @ViewChild('chartTarget') chartTarget: ElementRef;
  chart: Highcharts.ChartObject;
  connectedUser: any = {
    'username': ''
  };
  
  username = 'Pharaz';
  userIcon = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  nbHeures = 105;
  age = 25;
  pays = 'France';
  lang = 'Fr';
  divers = 'Aucune idée';

  locale = 'fr';

  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      title: 'Click me',
      start: new Date('2018-07-04T16:00:00'),
      end: new Date('2018-07-04T17:00:00')
    },
    {
      title: 'Or click me',
      start: new Date('2018-07-04T17:00:00'),
      end: new Date('2018-07-04T18:00:00'),
    }
  ];

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.apiService.getUserById(params['id']).subscribe( (userData: User) => {
        console.log(userData);
        this.username = userData.username;
        this.age = userData.age;
        this.pays = userData.pays;
        this.lang = userData.langue;
        this.divers = userData.divers;
        // userIcon = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
        // nbHeures = 105;
        // age = 25;
        // pays = 'France';
        // lang = 'Fr';
        // divers = 'Aucune idée';
      });
    });
    this.connectedUser = localStorage.getItem('connectedUser') && JSON.parse(localStorage.getItem('connectedUser'));
    if (this.connectedUser == null) {
      this.connectedUser = {
        username: ''
      };
    }
  }

  saveParametres() {
    console.log(this.connectedUser.id)
    this.apiService.putUserInfos(this.connectedUser.id, {
      age: this.age,
      pays: this.pays,
      langue: this.lang,
      divers: this.divers
    });
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    const options: Highcharts.Options = {
      title: {
        text: 'Evolution de vos capacités par Séance'
      },
      xAxis: {
        categories: ['séance 1', 'séance 2', 'séance 3', 'séance 4']
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      series: [{
        name: 'Précision',
        data: [2, 4, 5, 7]
      }, {
        name: 'MindGame',
        data: [1, 2, 5, 6]
      }, {
        name: 'Communication',
        data: [3, 4, 5, 7]
      }, {
        name: 'Déplacements',
        data: [2, 2, 5, 6]
      }, {
        name: 'Réflexes',
        data: [4, 4, 5, 6]
      }]
    };
  
    this.chart = chart(this.chartTarget.nativeElement, options);
  }

  addSeries(){
    this.chart.addSeries({
      name:'Balram',
      data:[2,3,7]
    })    
  }
}
export class User{
  username: string;
  age: any;
  pays: string;
  langue: string;
  divers: string;
}