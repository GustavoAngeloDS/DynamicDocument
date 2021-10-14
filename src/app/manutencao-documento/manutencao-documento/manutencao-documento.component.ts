import { Component, OnInit, ViewChild } from '@angular/core';
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
  tipoDocumentos!: TipoDocumento[];
  documento!: Documento;

  constructor(private tipoDocumentoService : TipoDocumentoService, private documentoService: DocumentoService) { }

  ngOnInit(): void {
    this.tipoDocumentos = this.tipoDocumentoService.listarTodos();
    this.documento = new Documento();
    //this.documento = this.documentoService.buscarPorId(1634253576969);
  }

  salvarDocumento(): void {
    this.documentoService.inserir(this.documento!);
  }
}
