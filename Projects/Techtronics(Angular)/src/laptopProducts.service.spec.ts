/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LaptopProductsService } from './laptopProducts.service';

describe('Service: LaptopProducts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaptopProductsService]
    });
  });

  it('should ...', inject([LaptopProductsService], (service: LaptopProductsService) => {
    expect(service).toBeTruthy();
  }));
});
