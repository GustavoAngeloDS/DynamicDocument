import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Nacionalidade } from 'src/app/shared/models/nacionalidade.model';
import { Usuario } from 'src/app/shared/models/usuario.model';

const LS_CHAVE: string = "usuarioLogado";

export class LoginService {

  public get usuarioLogado(): Usuario {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(usuario: Usuario): Observable<Usuario | null> {
    

    if(usuario.senhaUsuario=='teste123' && usuario.nomeUsuario=='GustavoSilva'){
      let usu = new Usuario(1, "GustavoSilva", "teste123", 'Gustavo Angelo da Silva', '30/11/1998', new Nacionalidade(1, 'Brasileiro'), 'gustavosilvaangelo@gmail.com', 'ADMIN');
      return of(usu);
    }
    return of(null);
  }
}
