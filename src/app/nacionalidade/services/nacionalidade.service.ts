import { Injectable } from '@angular/core';
import { Nacionalidade } from 'src/app/shared/models/nacionalidade.model';

@Injectable({
  providedIn: 'root'
})
export class NacionalidadeService {

  constructor() { }

  listarTodos(): Nacionalidade[]{
    //const nacionalidades = localStorage[LS_CHAVE];
    //return nacionalidades ? JSON.parse(nacionalidades) : [];
    return [{id: 1, descricao: "Brasil"},{id: 2, descricao: "Argentina"}, {id: 3, descricao: "Estados Unidos"},{id: 4, descricao: "África"}];
  }
}
