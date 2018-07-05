import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-coach-listitem',
  templateUrl: './coach-listitem.component.html',
  styleUrls: ['./coach-listitem.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoachListitemComponent implements OnInit {
  @Input() coach: any;

  constructor() {
  }

  ngOnInit() {
  }

}
