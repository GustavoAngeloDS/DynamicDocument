import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarTipoDocumentoComponent } from './criar-tipo-documento/criar-tipo-documento.component';
import { TipoDocumentoService } from './services/tipo-documento.service';



@NgModule({
  declarations: [
    CriarTipoDocumentoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TipoDocumentoService
  ]
})
export class TipoDocumentoModule { }
