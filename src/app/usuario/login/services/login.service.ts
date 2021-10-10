import { Observable, of } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

const LS_CHAVE: string = "usuarioLogado";
const usuarioService = new UsuarioService();

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

  autenticarUsuario(usuarioLogin : string, usuarioSenha : string) : Usuario | null {
    let usuarios = usuarioService.listarTodos();
    usuarios = usuarios.filter(
      usuario => 
      usuario.nomeUsuario == usuarioLogin
      && usuario.senhaUsuario == usuarioSenha
    );

    return usuarios[0]
  }

  login(usuario: Usuario): Observable<Usuario | null > {
    return of (this.autenticarUsuario(usuario.nomeUsuario!, usuario.senhaUsuario!));
  }
}
