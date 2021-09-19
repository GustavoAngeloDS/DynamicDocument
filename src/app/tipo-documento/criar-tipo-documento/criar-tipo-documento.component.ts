import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from 'src/app/shared/models/tipo-documento.model';
import { TipoDocumentoService } from '../services/tipo-documento.service';

@Component({
  selector: 'app-criar-tipo-documento',
  templateUrl: './criar-tipo-documento.component.html',
  styleUrls: ['./criar-tipo-documento.component.css']
})
export class CriarTipoDocumentoComponent implements OnInit {

  tipoDocumentos!: TipoDocumento[];

  constructor(private tipoDocumentoService: TipoDocumentoService) { }

  ngOnInit(): void {
    this.tipoDocumentos = this.tipoDocumentoService.listarTodos();
  }
}
