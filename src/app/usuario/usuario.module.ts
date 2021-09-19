import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { UsuarioService } from './services/usuario.service';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NacionalidadeService } from '../nacionalidade/services/nacionalidade.service';



@NgModule({
  declarations: [
    CriarUsuarioComponent
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
