import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CidadeService } from './services/cidade.service';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';

@NgModule({
  declarations: [
    InserirCidadeComponent,
    ListarCidadeComponent,
    EditarCidadeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    CidadeService
  ]
})
export class CidadeModule { }
