import { TestBed, inject } from '@angular/core/testing';

import { PassangerDashboardService } from './passanger-dashboard.service';

describe('PassangerDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassangerDashboardService]
    });
  });

  it('should be created', inject([PassangerDashboardService], (service: PassangerDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
