import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { InfoComponent } from './info/info.component';
import { DadosComponent } from './dados/dados.component';
import { RecargaComponent } from './recarga/recarga.component';
import { ResultadoComponent } from './resultado/resultado.component';

const rotas:Routes = [
  {path: 'home', component: DadosComponent},
  {path: 'recarga', component: RecargaComponent},
  {path: 'resultado', component: ResultadoComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

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
    BrowserModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
