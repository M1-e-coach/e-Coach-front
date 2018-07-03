import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SiteFooterComponent implements OnInit {
  siteName = "e-Coach";
  constructor() {}
  ngOnInit() {
  }

}
