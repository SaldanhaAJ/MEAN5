import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTablesComponent } from './index-tables.component';

describe('IndexTablesComponent', () => {
  let component: IndexTablesComponent;
  let fixture: ComponentFixture<IndexTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
