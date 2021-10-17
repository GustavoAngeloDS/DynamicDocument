import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoCamposVariaveisComponent } from './manutencao-campos-variaveis.component';

describe('ManutencaoCamposVariaveisComponent', () => {
  let component: ManutencaoCamposVariaveisComponent;
  let fixture: ComponentFixture<ManutencaoCamposVariaveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutencaoCamposVariaveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoCamposVariaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
