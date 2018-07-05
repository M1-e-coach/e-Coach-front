import { Component, OnInit } from '@angular/core';
import {
  CalendarEvent,
  DAYS_OF_WEEK,
  CalendarEventTitleFormatter
} from 'angular-calendar';
import {CustomEventTitleFormatter} from './../../services/custom-event-title-formatter.provider';
import {CustomDateFormatter} from './../../services/custom-date-formatter.provider';

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
    }
  ]
})
export class UserComponent implements OnInit {
  username = 'Pharaz';
  userIcon = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  nbHeures = 105;
  age = 25;
  pays = 'France';
  lang = 'Fr';
  divers = 'Aucune idée';

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

  constructor() { }

  ngOnInit() {
  }

}
