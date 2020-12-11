import { TestBed } from '@angular/core/testing';

import { Co2UserInputDataService } from './co2-user-input-data.service';

describe('Co2UserInputDataService', () => {
  let service: Co2UserInputDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Co2UserInputDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
