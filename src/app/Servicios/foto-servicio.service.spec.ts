import { TestBed } from '@angular/core/testing';

import { FotoServicioService } from './foto-servicio.service';

describe('FotoServicioService', () => {
  let service: FotoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
