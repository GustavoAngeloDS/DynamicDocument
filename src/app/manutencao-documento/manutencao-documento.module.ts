import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TipoDocumentoModule } from '../tipo-documento/tipo-documento.module';
import { ManutencaoDocumentoComponent } from './manutencao-documento/manutencao-documento.component';
import { DocumentoService } from './services/documento.service';

@NgModule({
  declarations: [
    ManutencaoDocumentoComponent
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
export class ManutencaoDocumentoModule { }
