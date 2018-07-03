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
    this.http.get('http://localhost:4200').subscribe(data => {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          this.projects.push(data[key]);
        }
      }

      console.log(this.projects);
    });
  }

}
