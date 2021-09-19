import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDocumentoService } from './services/tipo-documento.service';
import { ModalTipoDocumentoComponent } from './modal-tipo-documento/modal-tipo-documento.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalTipoDocumentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    TipoDocumentoService
  ]
})
export class TipoDocumentoModule { }
