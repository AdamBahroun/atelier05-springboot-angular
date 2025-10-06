import { TestBed } from '@angular/core/testing';

import { voitureService } from './voiture.service';

describe('VoitureService', () => {
  let service: voitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(voitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
