import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './componentes-visuais/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes-visuais/rodape/rodape.component';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [
    CabecalhoComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  exports:[
    CabecalhoComponent,
    RodapeComponent
  ]
})
export class SharedModule { }
