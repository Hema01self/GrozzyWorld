import { TestBed } from '@angular/core/testing';

import { ProductApiService } from './product-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductApiService', () => {
  let service: ProductApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(ProductApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
