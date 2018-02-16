import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  resultado = '0.00';
  nome;
  bilhete;

  constructor(private dados: DadosService) { }

  ngOnInit() {
    let dadosDoServico = this.dados.ler();
    
    let operacao = dadosDoServico.viagens * dadosDoServico.valor;
    this.resultado = operacao.toFixed(2).replace('.', ',');
    
    this.nome = dadosDoServico.nome;
    this.bilhete = dadosDoServico.bilhete;
  }

}
