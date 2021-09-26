import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor() { }

  numeroVersaoSistema! : string;

  ngOnInit(): void {
    this.numeroVersaoSistema = "1.0.0"
  }
}
