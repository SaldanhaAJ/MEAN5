import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerNavComponent } from './passanger-nav.component';

describe('PassangerNavComponent', () => {
  let component: PassangerNavComponent;
  let fixture: ComponentFixture<PassangerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassangerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassangerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
