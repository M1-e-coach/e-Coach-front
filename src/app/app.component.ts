import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'GameCoach';

  projects = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }

}
