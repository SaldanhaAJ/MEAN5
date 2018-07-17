import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEmitterComponent } from './index-emitter.component';

describe('IndexEmitterComponent', () => {
  let component: IndexEmitterComponent;
  let fixture: ComponentFixture<IndexEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
