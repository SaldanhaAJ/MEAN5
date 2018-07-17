import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDynamicComponent } from './auth-dynamic.component';

describe('AuthDynamicComponent', () => {
  let component: AuthDynamicComponent;
  let fixture: ComponentFixture<AuthDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
