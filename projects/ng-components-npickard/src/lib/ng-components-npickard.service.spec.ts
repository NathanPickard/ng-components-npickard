import { TestBed, inject } from '@angular/core/testing';

import { NgComponentsNpickardService } from './ng-components-npickard.service';

describe('NgComponentsNpickardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgComponentsNpickardService]
    });
  });

  it('should be created', inject([NgComponentsNpickardService], (service: NgComponentsNpickardService) => {
    expect(service).toBeTruthy();
  }));
});
