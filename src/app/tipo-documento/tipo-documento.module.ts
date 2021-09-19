import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDocumentoService } from './services/tipo-documento.service';
import { ModalTipoDocumentoComponent } from './modal-tipo-documento/modal-tipo-documento.component';



@NgModule({
  declarations: [
    ModalTipoDocumentoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TipoDocumentoService
  ]
})
export class TipoDocumentoModule { }
