import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { UsuarioService } from './services/usuario.service';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NacionalidadeService } from '../nacionalidade/services/nacionalidade.service';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    CriarUsuarioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
