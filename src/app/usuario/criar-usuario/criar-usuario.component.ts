import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NacionalidadeService } from 'src/app/nacionalidade/services/nacionalidade.service';
import { Nacionalidade } from 'src/app/shared/models/nacionalidade.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent implements OnInit {

  @ViewChild('formUsuario') formUsuario! : NgForm;
  usuario!: Usuario;
  nacionalidades!: Nacionalidade[];

  constructor(private usuarioService: UsuarioService, private nacionalidadeService: NacionalidadeService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.nacionalidades = this.nacionalidadeService.listarTodos();
  }

  inserir(){
    if(this.formUsuario.form.valid){
      this.usuarioService.inserir(this.usuario);
      this.router.navigate(["/login"]);
    }

  }

  nomeUsuarioSeraEmail(): void{
    if(this.verificaEmailPreenchido()){
      this.usuario.nomeUsuario = this.usuario.email 
      this.formUsuario.controls['nomeUsuario'].disable();
    }else{
      this.formUsuario.controls['nomeUsuario'].enable();
    }
  }

  verificaEmailPreenchido(): boolean {
    return this.usuario.email != null && this.usuario.email != undefined && this.usuario.email != '';
  }
}
