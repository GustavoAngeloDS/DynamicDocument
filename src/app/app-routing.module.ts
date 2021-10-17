import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ManutencaoCamposVariaveisComponent } from './documento/manutencao-campos-variaveis/manutencao-campos-variaveis.component';
import { ManutencaoDocumentoComponent } from './documento/manutencao-documento/manutencao-documento.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal/menu-principal.component';
import { ModalTipoDocumentoComponent } from './tipo-documento/modal-tipo-documento/modal-tipo-documento.component';
import { CriarUsuarioComponent } from './usuario/criar-usuario/criar-usuario.component';
import { LoginComponent } from './usuario/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'menu',
    component: MenuPrincipalComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrarUsuario',
    component: CriarUsuarioComponent
  },
  {
    path: 'tipoDocumentos',
    component: ModalTipoDocumentoComponent
  },
  {
    path: 'manutencaoDocumentos',
    component: ManutencaoDocumentoComponent
  },
  {
    path: 'manutencaoCamposVariaveis',
    component: ManutencaoCamposVariaveisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
