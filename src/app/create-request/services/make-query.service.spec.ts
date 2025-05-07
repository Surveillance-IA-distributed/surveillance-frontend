import { TestBed } from '@angular/core/testing';

import { MakeQueryService } from './make-query.service';

describe('MakeQueryService', () => {
  let service: MakeQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
