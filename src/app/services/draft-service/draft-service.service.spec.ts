import { TestBed } from '@angular/core/testing';

import { DraftServiceService } from './draft-service.service';

describe('DraftServiceService', () => {
  let service: DraftServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraftServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
