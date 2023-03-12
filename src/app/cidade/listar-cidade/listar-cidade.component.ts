import { Component, OnInit} from '@angular/core';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { faCoffee, faEdit, faTimes, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})

export class ListarCidadeComponent implements OnInit{
  cidades : Cidade[] = [];

  faCoffee = faCoffee;
  faEdit = faEdit;
  faTimes = faTimes;
  faPlus = faPlusSquare;
  
  constructor(private cidadeService: CidadeService){}
    ngOnInit(): void{
      this.cidades = this.listarTodos();
  }
  listarTodos(): Cidade[]{
      return this.cidadeService.listarTodos();
  }
  remover($event: any, cidade: Cidade): void{
    $event.preventDefault();
    if(confirm(`Deseja remover a cidade ${cidade.nome}?`)){
      this.cidadeService.remover(cidade.id!);
      this.cidades = this.listarTodos();
    }
  }
}
