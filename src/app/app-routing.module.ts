import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CriarTipoDocumentoComponent } from './tipo-documento/criar-tipo-documento/criar-tipo-documento.component';
import { CriarUsuarioComponent } from './usuario/criar-usuario/criar-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: MenuPrincipalComponent
  },
  {
    path: 'tipoDocumento',
    component: CriarTipoDocumentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
