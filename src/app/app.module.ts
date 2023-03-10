import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PessoaModule } from './pessoa/pessoa.module';
import { EnderecoModule } from './endereco/endereco.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CidadeModule } from './cidade/cidade.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    PessoaModule,
    EnderecoModule,
    CidadeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
