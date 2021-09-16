import { TestBed } from '@angular/core/testing';

import { ProductReceiverService } from './product-receiver.service';

describe('ProductReceiverService', () => {
  let service: ProductReceiverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductReceiverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
