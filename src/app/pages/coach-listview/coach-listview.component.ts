import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../services/api-service.service';

@Component({
  selector: 'app-coach-listview',
  templateUrl: './coach-listview.component.html',
  styleUrls: ['./coach-listview.component.scss'],
  providers: [
    ApiService
  ],
  encapsulation: ViewEncapsulation.None
})
export class CoachListviewComponent implements OnInit {

  listCoach: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getCoach().subscribe(data => {
      console.log(data);
      this.listCoach = data;
    });
  }
}
