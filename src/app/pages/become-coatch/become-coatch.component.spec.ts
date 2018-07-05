import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeCoatchComponent } from './become-coatch.component';

describe('BecomeCoatchComponent', () => {
  let component: BecomeCoatchComponent;
  let fixture: ComponentFixture<BecomeCoatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeCoatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeCoatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
