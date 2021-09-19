import { Injectable } from '@angular/core';
import { TipoDocumento } from 'src/app/shared/models/tipo-documento.model';

const LS_CHAVE: string = "tipoDocumentos";

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  constructor() { }

  listarTodos(): TipoDocumento[]{
    const tipoDocumentos = localStorage[LS_CHAVE];
    return tipoDocumentos ? JSON.parse(tipoDocumentos) : [];
  }

  buscarPorId(id: number): TipoDocumento | undefined {
    const tipoDocumentos: TipoDocumento[] = this.listarTodos();
    return tipoDocumentos.find(tipoDocumento => tipoDocumento.id === id);
  }

  inserir(tipoDocumento: TipoDocumento): void {
    const tipoDocumentos = this.listarTodos();

    tipoDocumento.id = new Date().getTime();
    tipoDocumentos.push(tipoDocumento);

    localStorage[LS_CHAVE] = JSON.stringify(tipoDocumentos);
  }

  atualizar(tipoDocumento: TipoDocumento): void {
    const tipoDocumentos: TipoDocumento[] = this.listarTodos();
    tipoDocumentos.forEach((obj, index, objs) => {
      if(tipoDocumento.id === obj.id) {
        objs[index] = tipoDocumento
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(tipoDocumentos);
  }

  remover(id: number): void {
    let tipoDocumentos: TipoDocumento[] = this.listarTodos();

    tipoDocumentos = tipoDocumentos.filter(tipoDocumento => tipoDocumento.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(tipoDocumentos);
  }
}
