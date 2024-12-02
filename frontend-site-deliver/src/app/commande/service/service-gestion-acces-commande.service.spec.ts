import { TestBed } from '@angular/core/testing';

import { ServiceGestionAccesCommandeService } from './service-gestion-acces-commande.service';

describe('ServiceGestionAccesCommandeService', () => {
  let service: ServiceGestionAccesCommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGestionAccesCommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
