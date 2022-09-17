import { TestBed } from '@angular/core/testing';

import { RitualService } from './ritual.service';

describe('RitualService', () => {
  let service: RitualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RitualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
