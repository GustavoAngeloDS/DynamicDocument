import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoDocumentoComponent } from './manutencao-documento.component';

describe('ManutencaoDocumentoComponent', () => {
  let component: ManutencaoDocumentoComponent;
  let fixture: ComponentFixture<ManutencaoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutencaoDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
