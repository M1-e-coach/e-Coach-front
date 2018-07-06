import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../services/api-service.service';
import {ActivatedRoute, Params} from '@angular/router';

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

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.apiService.getCoachByGame(params['game']).subscribe((data: Coach) => {
        console.log(data);
        this.listCoach = data.CoachsByJeu;
      });
    });
  }
}
export class Coach{
  CoachsByJeu: any;
}