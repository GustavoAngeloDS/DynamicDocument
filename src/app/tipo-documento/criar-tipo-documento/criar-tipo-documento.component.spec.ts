import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTipoDocumentoComponent } from './criar-tipo-documento.component';

describe('CriarTipoDocumentoComponent', () => {
  let component: CriarTipoDocumentoComponent;
  let fixture: ComponentFixture<CriarTipoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarTipoDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
