import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachListitemComponent } from './coach-listitem.component';

describe('CoachListitemComponent', () => {
  let component: CoachListitemComponent;
  let fixture: ComponentFixture<CoachListitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachListitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
