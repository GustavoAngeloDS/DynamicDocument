import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TipoDocumento } from 'src/app/shared/models/tipo-documento.model';
import { TipoDocumentoService } from '../services/tipo-documento.service';

@Component({
  selector: 'app-modal-tipo-documento',
  templateUrl: './modal-tipo-documento.component.html',
  styleUrls: ['./modal-tipo-documento.component.css']
})
export class ModalTipoDocumentoComponent implements OnInit {

  @ViewChild('btnEditar') btnEditar!: ElementRef<HTMLInputElement>;
  @ViewChild('btnExcluir') btnExcluir!: ElementRef<HTMLInputElement>;
  tiposDocumentos!: TipoDocumento[];
  tipoDocumentoSelecionado: TipoDocumento | undefined;

  constructor(public activeModal: NgbActiveModal, private tipoDocumentoService: TipoDocumentoService) { }

  ngOnInit(): void {
    this.tiposDocumentos = this.tipoDocumentoService.listarTodos();
  }

  ativaBotoes(){
    this.btnEditar.nativeElement.disabled = false;
    this.btnExcluir.nativeElement.disabled = false;
  }

  setaSelecionado(evento: any, tipoDocumento : TipoDocumento): void{
    this.tipoDocumentoSelecionado = tipoDocumento;
    this.ativaBotoes();
  }
}
