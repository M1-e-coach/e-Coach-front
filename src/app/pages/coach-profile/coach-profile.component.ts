import {Component, Inject, OnInit} from '@angular/core';
// import {DialogData, EventDialogComponent} from '../event-dialog/event-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss']
})
export class CoachProfileComponent implements OnInit {
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

  
}

@Component({
  selector: 'app-event-dialog',
  templateUrl: '../event-dialog/event-dialog.component.html',
  styleUrls: ['../event-dialog/event-dialog.component.css']
})
export class EventDialogComponent {

  constructor(public dialogRef: MatDialogRef<EventDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


