import {Component, Inject, OnInit} from '@angular/core';
import {
  CalendarEvent,
  DAYS_OF_WEEK,
  CalendarEventTitleFormatter
} from 'angular-calendar';
import {CustomEventTitleFormatter} from './../../services/custom-event-title-formatter.provider';
import {CustomDateFormatter} from './../../services/custom-date-formatter.provider';

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss'],
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
<<<<<<< HEAD
  constructor(public dialog: MatDialog) {
  }
  ngOnInit() {
  }
  calendarOptions: Object = {
    lang: 'fr',
    height: 600,
    defaultView: 'agendaWeek',
    fixedWeekCount: false,
    scrollTime: '16:00:00',
    allDaySlot: false,
    events: [{
      title: 'Meeting',
      start: '2018-07-03T16:00:00',
      end: '2018-07-03T18:00:00'
    }],
    eventClick: this.openDialog
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  
=======
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

  handleEvent() {
    console.log('Hey');
  }

  constructor() {
  }

  ngOnInit() {
  }
>>>>>>> 92f50d422dab96d0fc312bc37a7171d4abfc05a2
}
