import {Component, OnInit} from '@angular/core';
import {
  CalendarEvent,
  DAYS_OF_WEEK,
  CalendarEventTitleFormatter
} from 'angular-calendar';
import {CustomEventTitleFormatter} from './../../services/custom-event-title-formatter.provider';
import {CustomDateFormatter} from './../../services/custom-date-formatter.provider';
import {ApiService} from '../../services/api-service.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

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
export class UserComponent implements OnInit {
  connectedUser: any;
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
      this.apiService.getUserById(params['id']).subscribe(userData => {
        console.log(userData);
        this.username = userData.username;
        // userIcon = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
        // nbHeures = 105;
        // age = 25;
        // pays = 'France';
        // lang = 'Fr';
        // divers = 'Aucune idée';
      });
    });
    this.connectedUser = localStorage.getItem('connectedUser') && JSON.parse(localStorage.getItem('connectedUser'));
  }

  ngOnInit() {
  }

}
