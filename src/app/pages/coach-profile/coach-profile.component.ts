import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {
  CalendarEvent,
  DAYS_OF_WEEK,
  CalendarEventTitleFormatter
} from 'angular-calendar';
import {CustomEventTitleFormatter} from './../../services/custom-event-title-formatter.provider';
import {CustomDateFormatter} from './../../services/custom-date-formatter.provider';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
export class CoachProfileComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 10;
  min = 0;
  showTicks = false;
  step = 0.5;
  thumbLabel = true;
  value = 0;
  vertical = false;

  infos;
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

  locale = 'fr';

  handleEvent(event) {
    console.log(event);
    $("#calendarModal").modal({
      keyboard: false,
      });
    this.infos = event.title;
  }

  constructor() {
  }

  ngOnInit() {
  }
  
}
