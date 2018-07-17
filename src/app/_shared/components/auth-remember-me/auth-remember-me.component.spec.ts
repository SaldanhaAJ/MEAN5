import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRememberMeComponent } from './auth-remember-me.component';

describe('AuthRememberMeComponent', () => {
  let component: AuthRememberMeComponent;
  let fixture: ComponentFixture<AuthRememberMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRememberMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRememberMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
