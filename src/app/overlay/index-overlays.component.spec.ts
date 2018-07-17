import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexOverlaysComponent } from './index-overlays.component';

describe('IndexOverlaysComponent', () => {
  let component: IndexOverlaysComponent;
  let fixture: ComponentFixture<IndexOverlaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexOverlaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexOverlaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
