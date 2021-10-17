import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { TipoDocumentoModule } from '../tipo-documento/tipo-documento.module';
import { DocumentoService } from './services/documento.service';
import { ManutencaoDocumentoComponent } from './manutencao-documento/manutencao-documento.component';
import { ManutencaoCamposVariaveisComponent } from './manutencao-campos-variaveis/manutencao-campos-variaveis.component';

@NgModule({
  declarations: [
    ManutencaoDocumentoComponent,
    ManutencaoCamposVariaveisComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgSelectModule,
    FormsModule,
    TipoDocumentoModule
  ],
  providers: [
    DocumentoService
  ]
})
export class DocumentoModule { }
