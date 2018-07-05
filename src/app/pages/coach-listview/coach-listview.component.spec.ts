import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachListviewComponent } from './coach-listview.component';

describe('CoachListviewComponent', () => {
  let component: CoachListviewComponent;
  let fixture: ComponentFixture<CoachListviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachListviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
