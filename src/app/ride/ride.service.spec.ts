import { TestBed, inject } from '@angular/core/testing';

import { RideService } from './ride.service';

describe('RideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RideService]
    });
  });

  it('should ...', inject([RideService], (service: RideService) => {
    expect(service).toBeTruthy();
  }));
});
