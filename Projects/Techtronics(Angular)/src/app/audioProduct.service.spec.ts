/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AudioProductService } from './audioProduct.service';

describe('Service: AudioProduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AudioProductService]
    });
  });

  it('should ...', inject([AudioProductService], (service: AudioProductService) => {
    expect(service).toBeTruthy();
  }));
});
