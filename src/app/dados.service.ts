import { Injectable } from '@angular/core';

@Injectable()
export class DadosService {
  meusDados;

  constructor() { }

  gravar(novosDados){
    this.meusDados = novosDados;
    console.log(this.meusDados);
  }

  ler(){
    return this.meusDados;
  }

}
