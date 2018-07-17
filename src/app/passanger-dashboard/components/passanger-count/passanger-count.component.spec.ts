import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerCountComponent } from './passanger-count.component';

describe('PassangerCountComponent', () => {
  let component: PassangerCountComponent;
  let fixture: ComponentFixture<PassangerCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassangerCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassangerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
