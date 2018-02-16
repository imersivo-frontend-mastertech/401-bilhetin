import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.scss']
})
export class RecargaComponent implements OnInit {
  numeroViagens;
  valorViagem;

  constructor(private router: Router, private dados: DadosService) { }

  ngOnInit() {
  }

  avancar(){
    let novosDados = this.dados.ler();
    novosDados.viagens = this.numeroViagens;
    novosDados.valor = this.valorViagem;

    this.dados.gravar(novosDados);

    this.router.navigate(['/resultado']);
  }

}
