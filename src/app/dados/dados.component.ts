import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosComponent implements OnInit {
  formulario = {};

  constructor(private roteador:Router, private dados: DadosService) { }

  ngOnInit() {
  }

  avancar(){
    this.dados.gravar(this.formulario);
    this.roteador.navigate(['/recarga']);
  }
}
