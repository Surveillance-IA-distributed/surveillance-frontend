import { TestBed } from '@angular/core/testing';

import { GetScenariesService } from './get-scenaries.service';

describe('GetScenariesService', () => {
  let service: GetScenariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetScenariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
