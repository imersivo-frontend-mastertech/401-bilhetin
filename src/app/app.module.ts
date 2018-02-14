import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { InfoComponent } from './info/info.component';
import { DadosComponent } from './dados/dados.component';
import { RecargaComponent } from './recarga/recarga.component';
import { ResultadoComponent } from './resultado/resultado.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    InfoComponent,
    DadosComponent,
    RecargaComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
