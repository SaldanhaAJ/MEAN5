import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesDashboardComponent } from './tables-dashboard.component';

describe('TablesDashboardComponent', () => {
  let component: TablesDashboardComponent;
  let fixture: ComponentFixture<TablesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
