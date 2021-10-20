import { TestBed } from '@angular/core/testing';

import { FluxService } from 'src/app/services/flux.service';

describe('FluxService', () => {
  let service: FluxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
