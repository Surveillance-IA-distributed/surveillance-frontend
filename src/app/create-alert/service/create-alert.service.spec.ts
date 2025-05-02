import { TestBed } from '@angular/core/testing';

import { CreateAlertService } from './create-alert.service';

describe('CreateAlertService', () => {
  let service: CreateAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
