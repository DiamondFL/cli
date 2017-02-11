/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KeengService } from './keeng.service';

describe('KeengService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeengService]
    });
  });

  it('should ...', inject([KeengService], (service: KeengService) => {
    expect(service).toBeTruthy();
  }));
});
