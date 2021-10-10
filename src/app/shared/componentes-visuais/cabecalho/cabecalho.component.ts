import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/usuario/login/services/login.service';


@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  nomeUsuarioLogado : string = "";
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.nomeUsuarioLogado = this.loginService.usuarioLogado.nomeCompleto!;
  }

  logout(): void{
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
