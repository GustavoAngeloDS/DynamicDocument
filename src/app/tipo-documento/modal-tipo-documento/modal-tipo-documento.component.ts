import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TipoDocumento } from 'src/app/shared/models/tipo-documento.model';
import { TipoDocumentoService } from '../services/tipo-documento.service';

@Component({
  selector: 'app-modal-tipo-documento',
  templateUrl: './modal-tipo-documento.component.html',
  styleUrls: ['./modal-tipo-documento.component.css']
})
export class ModalTipoDocumentoComponent implements OnInit {
  tiposDocumentos!: TipoDocumento[];
  @Input() tipoDocumentoSelecionado: TipoDocumento | undefined;
  novoTipoDocumento! : TipoDocumento;
  novoHabilitado: boolean = false;
  isEditando: boolean = false;

  constructor(
    public activeModal: NgbActiveModal, 
    private tipoDocumentoService: TipoDocumentoService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.tiposDocumentos = this.tipoDocumentoService.listarTodos();
    this.novoTipoDocumento = new TipoDocumento();
  }

  verificaFoiMarcado(evento: any): boolean{
    return evento.currentTarget.checked;
  }

  configuraTipoSelecionado(evento: Event, tipoDocumento : TipoDocumento): void{      
    if(this.verificaFoiMarcado(evento)){
      this.tipoDocumentoSelecionado = tipoDocumento;
      this.isEditando = true;
    }else{
      this.tipoDocumentoSelecionado = undefined;
      this.isEditando = false;
    }
  }

  habilitarNovoTipo(): void{
    this.novoHabilitado = true;
  }

  excluir(): void {
    this.tipoDocumentoService.remover(this.tipoDocumentoSelecionado?.id!);
    this.recarregarModal();
  }

  salvar(): void {
    if(this.isEditando == true)
      this.tipoDocumentoService.atualizar(this.tipoDocumentoSelecionado!);
    else
      this.tipoDocumentoService.inserir(this.novoTipoDocumento!);

    this.recarregarModal();
  }

  cancelar(): void {
    this.isEditando == false;
    this.tipoDocumentoSelecionado == undefined;
    this.recarregarModal();
  }

  recarregarModal(): void{
    this.activeModal.close();
    this.modalService.open(ModalTipoDocumentoComponent);
  }
}
