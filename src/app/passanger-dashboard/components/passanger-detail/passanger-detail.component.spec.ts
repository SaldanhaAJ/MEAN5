import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerDetailComponent } from './passanger-detail.component';

describe('PassangerDetailComponent', () => {
  let component: PassangerDetailComponent;
  let fixture: ComponentFixture<PassangerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassangerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassangerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
