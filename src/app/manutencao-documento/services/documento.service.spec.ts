import { TestBed } from '@angular/core/testing';

import { DocumentoService } from './documento.service';

describe('ManutencaoDocumentoService', () => {
  let service: DocumentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
