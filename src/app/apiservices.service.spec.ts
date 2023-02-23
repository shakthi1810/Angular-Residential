import { TestBed } from '@angular/core/testing';

import { APIServicesService } from './dashboard/apiservices.service';

describe('APIServicesService', () => {
  let service: APIServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
