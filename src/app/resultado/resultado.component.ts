import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  resultado = 0;

  constructor(private rotaAtiva: ActivatedRoute) { }

  ngOnInit() {
    this.rotaAtiva.params.subscribe((parametros) => {
      this.resultado = parametros.valor * parametros.viagens;
    });
  }

}
