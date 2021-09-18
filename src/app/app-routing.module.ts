import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarUsuarioComponent } from './usuario/criar-usuario/criar-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: CriarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
