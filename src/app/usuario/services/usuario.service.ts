import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';

const LS_CHAVE: string = "usuarios";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  listarTodos(): Usuario[]{
    const usuarios = localStorage[LS_CHAVE];
    return usuarios ? JSON.parse(usuarios) : [];
  }

  inserir(usuario: Usuario): void {
    const usuarios = this.listarTodos();

    usuario.id = new Date().getTime();
    usuarios.push(usuario);

    localStorage[LS_CHAVE] = JSON.stringify(usuarios);
  }
}
