import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Documento } from 'src/app/shared/models/documento.model';
import { TipoDocumento } from 'src/app/shared/models/tipo-documento.model';
import { TipoDocumentoService } from 'src/app/tipo-documento/services/tipo-documento.service';
import { DocumentoService } from '../services/documento.service';

@Component({
  selector: 'app-manutencao-documento',
  templateUrl: './manutencao-documento.component.html',
  styleUrls: ['./manutencao-documento.component.css']
}) 
export class ManutencaoDocumentoComponent implements OnInit {
  @ViewChild('formManutencaoDocumento') formManutencaoDocumento! : NgForm;
  filtroTipoDeDocumento!: TipoDocumento;

  tipoDocumentos!: TipoDocumento[];
  documentos!: Documento[];
  documentoPrincipal!: Documento;
  
  isInserindoNovoDocumento : boolean = false;
  isEditando : boolean = false;

  constructor(private tipoDocumentoService : TipoDocumentoService, private documentoService: DocumentoService) { }

  filtraListaDocumentosPorTipoDeDocumento() : void {
    if(this.filtroTipoDeDocumento != null)
      this.documentos = this.documentoService.listarTodos().filter((documento) => documento.tipoDocumento!.id == this.filtroTipoDeDocumento.id);
    else
      this.documentos = this.documentoService.listarTodos();
  }

  ngOnInit(): void {
    this.preparaValoresIniciaisTela();
    this.documentoPrincipal = new Documento();
  }

  preparaValoresIniciaisTela(): void {
    this.preencheTiposDeDocumentos();
    this.preencheDocumentos();
  }

  preencheTiposDeDocumentos(): void {
    this.tipoDocumentos = this.tipoDocumentoService.listarTodos();
  }

  preencheDocumentos(): void {
    this.documentos = this.documentoService.listarTodos();
  }

  salvarDocumento(): void {
    if(this.isInserindoNovoDocumento)
      this.documentoService.inserir(this.documentoPrincipal!);
    else
      this.documentoService.atualizar(this.documentoPrincipal);

    this.filtraListaDocumentosPorTipoDeDocumento();
    this.isInserindoNovoDocumento = false;
    this.isEditando = false;
  }

  selecionarDocumentoPrincipal(documento : Documento){
    if(!this.isInserindoNovoDocumento && !this.isEditando)
      this.documentoPrincipal = documento;
  }

  novoDocumento(): void {
    this.isInserindoNovoDocumento = true;
    this.limparCamposDocumentoPrincipal();
  }

  excluirDocumento(): void {
    if(this.isInserindoNovoDocumento == false){
      this.documentoService.remover(this.documentoPrincipal.id!);
      this.filtraListaDocumentosPorTipoDeDocumento();
      this.limparCamposDocumentoPrincipal();
    }
  }

  limparCamposDocumentoPrincipal(): void {
    let documento = new Documento();
    this.documentoPrincipal = documento;
  }

  editarDocumento(): void {
    this.isEditando = true;
  }

  cancelarSelecao(): void {
    if(this.isInserindoNovoDocumento)
      this.limparCamposDocumentoPrincipal();
      
    this.isInserindoNovoDocumento = false;
    this.isEditando = false;
  }
}
