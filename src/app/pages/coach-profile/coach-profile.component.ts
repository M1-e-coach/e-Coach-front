import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { CalendarEvent, DAYS_OF_WEEK, CalendarEventTitleFormatter } from 'angular-calendar';
import {CustomEventTitleFormatter} from './../../services/custom-event-title-formatter.provider';
import {CustomDateFormatter} from './../../services/custom-date-formatter.provider';
import {ActivatedRoute, Params} from '@angular/router';
import {ApiService} from '../../services/api-service.service';

declare var jquery: any;
declare var $: any;

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
    },
    ApiService
  ]
})
export class CoachProfileComponent implements OnInit {
  initialPrecision = 0;
  initialMindGame = 0;
  initialCom = 0;
  initialDeplacement = 0;
  initialReflexes = 0;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 10;
  min = 0;
  showTicks = false;
  step = 0.5;
  thumbLabel = true;
  vertical = false;
  curentCoach: any = {
    username: ''
  };
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
    $('#calendarModal').modal({
      keyboard: false,
    });
    this.infos = event.title;
  }

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.apiService.getUserById(params['id']).subscribe(coachData => {
        console.log(coachData);
        this.curentCoach = coachData;
        // userIcon = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
        // nbHeures = 105;
        // age = 25;
        // pays = 'France';
        // lang = 'Fr';
        // divers = 'Aucune idée';
      });
    });
  }

  ngOnInit() {
  }

}
