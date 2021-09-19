import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { MenuPrincipalModule } from './menu-principal/menu-principal.module';
import { TipoDocumentoModule } from './tipo-documento/tipo-documento.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    SharedModule,
    MenuPrincipalModule,
    TipoDocumentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
