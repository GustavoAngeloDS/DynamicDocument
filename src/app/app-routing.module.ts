import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal/menu-principal.component';
import { ModalTipoDocumentoComponent } from './tipo-documento/modal-tipo-documento/modal-tipo-documento.component';
import { CriarUsuarioComponent } from './usuario/criar-usuario/criar-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: MenuPrincipalComponent
  },
  {
    path: 'tipoDocumentos',
    component: ModalTipoDocumentoComponent
  },
  {
    path: 'registrarUsuario',
    component: CriarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
