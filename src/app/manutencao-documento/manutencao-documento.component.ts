import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TipoDocumento } from '../shared/models/tipo-documento.model';
import { TipoDocumentoService } from '../tipo-documento/services/tipo-documento.service';

@Component({
  selector: 'app-manutencao-documento',
  templateUrl: './manutencao-documento.component.html',
  styleUrls: ['./manutencao-documento.component.css']
})
export class ManutencaoDocumentoComponent implements OnInit {
  @ViewChild('formUsuario') formUsuario! : NgForm;
  tipoDocumentos!: TipoDocumento[];
  
  constructor(private tipoDocumentoService : TipoDocumentoService) { }

  ngOnInit(): void {
    this.tipoDocumentos = this.tipoDocumentoService.listarTodos();
  }

}
