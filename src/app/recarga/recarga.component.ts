import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.scss']
})
export class RecargaComponent implements OnInit {
  numeroViagens;
  valorViagem;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  avancar(){
    //mudar de pagina passando os valores
    let dados = {
      viagens: this.numeroViagens,
      valor: this.valorViagem
    }

    this.router.navigate(['/resultado', dados ]);
  }

}
