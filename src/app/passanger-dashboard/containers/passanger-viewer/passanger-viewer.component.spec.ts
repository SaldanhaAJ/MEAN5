import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerViewerComponent } from './passanger-viewer.component';

describe('PassangerViewerComponent', () => {
  let component: PassangerViewerComponent;
  let fixture: ComponentFixture<PassangerViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassangerViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassangerViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
