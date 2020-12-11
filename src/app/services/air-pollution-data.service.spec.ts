import { TestBed } from '@angular/core/testing';

import { AirPollutionDataService } from './air-pollution-data.service';

describe('AirPollutionDataService', () => {
  let service: AirPollutionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirPollutionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
