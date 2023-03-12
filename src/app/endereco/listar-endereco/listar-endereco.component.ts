import { Component } from '@angular/core';
import { faCoffee, faEdit, faPlusSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})

export class ListarEnderecoComponent {
  enderecos : Endereco[] = [];

  faCoffee = faCoffee;
  faedit = faEdit;
  faTimes = faTimes;
  faPlus = faPlusSquare;
  constructor(private enderecoService: EnderecoService){}
  ngOnInit(): void{
    this.enderecos = this.listarTodos();
  }
  listarTodos(): Endereco[]{
      return this.enderecoService.listarTodos();
  }
  remover($event: any, endereco: Endereco): void{
    $event.preventDefault();
    if(confirm(`Deseja remover o endereço: ${endereco.rua}?`)){
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.listarTodos();
    }
  }
}
