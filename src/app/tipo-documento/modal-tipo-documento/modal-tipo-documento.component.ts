import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TipoDocumento } from 'src/app/shared/models/tipo-documento.model';
import { TipoDocumentoService } from '../services/tipo-documento.service';

@Component({
  selector: 'app-modal-tipo-documento',
  templateUrl: './modal-tipo-documento.component.html',
  styleUrls: ['./modal-tipo-documento.component.css']
})
export class ModalTipoDocumentoComponent implements OnInit {

  tiposDocumentos!: TipoDocumento[];

  constructor(public activeModal: NgbActiveModal, public tipoDocumentoService: TipoDocumentoService) { }

  ngOnInit(): void {
    this.tiposDocumentos = this.tipoDocumentoService.listarTodos();
  }
}
