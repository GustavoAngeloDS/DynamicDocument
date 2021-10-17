import { Injectable } from '@angular/core';
import { Documento } from 'src/app/shared/models/documento.model';

const LS_CHAVE: string = "documentos";

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  constructor() { }

  listarTodos(): Documento[]{
    const documentos = localStorage[LS_CHAVE];
    return documentos ? JSON.parse(documentos) : [];
  }

  buscarPorId(id: number): Documento | undefined {
    const documentos: Documento[] = this.listarTodos();
    return documentos.find(documento => documento.id === id);
  }

  inserir(documento: Documento): void {
    const documentos = this.listarTodos();

    documento.id = new Date().getTime();
    documentos.push(documento);

    localStorage[LS_CHAVE] = JSON.stringify(documentos);
  }

  atualizar(documento: Documento): void {
    const documentos: Documento[] = this.listarTodos();
    documentos.forEach((obj, index, objs) => {
      if(documento.id === obj.id) {
        objs[index] = documento
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(documentos);
  }

  remover(id: number): void {
    let documentos: Documento[] = this.listarTodos();

    documentos = documentos.filter(documento => documento.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(documentos);
  }
}
