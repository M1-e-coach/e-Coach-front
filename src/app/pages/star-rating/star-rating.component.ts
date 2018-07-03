import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() rating: string;
  nbStar: number;
  halfStar: number;
  stars = [];
  emptyStar = [];

  constructor() {

  }

  ngOnInit() {
    this.halfStar = this.rating % 2;
    this.nbStar = Math.floor(Number(this.rating));
    this.stars = Array(this.nbStar).fill('0').map((x, i) => i);
    if (this.halfStar !== 0 && this.halfStar !== 1) {
      this.emptyStar = Array(4 - this.nbStar).fill('0').map((x, i) => i);
    } else {
      this.emptyStar = Array(5 - this.nbStar).fill('0').map((x, i) => i);
    }


    // this.halfStar = this.rating % 2;
    // console.log(this.halfStar)
  }

}
