import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from '../services/usuario.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!: Usuario;
  loading: boolean = false;
  message!: string;

  constructor(private loginService: LoginService, private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) { 
    this.usuario = new Usuario();

    if(this.loginService.usuarioLogado){
      this.router.navigate(["/menu"]);
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.message = params['error'];
    });
  }

  logar(): void {
    this.loading = true;
    const isValidUsuario = this.usuarioService.encontrarPorNomeUsuario(this.usuario.nomeUsuario!);

    if(isValidUsuario){
      this.loginService.login(this.usuario).subscribe((usu) => {
        if(usu != null){
          this.loginService.usuarioLogado = usu!;
          this.loading = false;
          this.router.navigate( ["/menu"] );
        }
      });
    }
  }
}
