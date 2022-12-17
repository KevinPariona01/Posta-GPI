import { TestBed } from '@angular/core/testing';

import { RegistrarCitasService } from './registrar-citas.service';

describe('RegistrarCitasService', () => {
  let service: RegistrarCitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarCitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
