import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { UsuarioService } from './services/usuario.service';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { LoginService } from './login/services/login.service';



@NgModule({
  declarations: [
    CriarUsuarioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    RouterModule
  ],
  providers: [
    UsuarioService,
    LoginService
  ]
})
export class UsuarioModule { }
