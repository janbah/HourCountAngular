import { TestBed } from '@angular/core/testing';

import { WorkingTimeDataService } from './working-time-data.service';

describe('WorkingTimeDataService', () => {
  let service: WorkingTimeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkingTimeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
