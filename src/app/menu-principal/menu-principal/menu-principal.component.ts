import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTipoDocumentoComponent } from 'src/app/tipo-documento/modal-tipo-documento/modal-tipo-documento.component';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  
  }

  abrirModalTipoDocumento(): void{
    const modalRef = this.modalService.open(ModalTipoDocumentoComponent);
  }
}
