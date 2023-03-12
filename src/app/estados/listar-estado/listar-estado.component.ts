import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/shared/models/estado.model';
import { faCoffee, faEdit, faPlusSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})

export class ListarEstadoComponent implements OnInit{
  estados : Estado[] = [];

  faCoffee = faCoffee;
  faedit = faEdit;
  faTimes = faTimes;
  faPlus = faPlusSquare;

  constructor(private estadoService: EstadoService){}

  ngOnInit(): void{
    this.estados = this.listarTodos();
  }

  listarTodos(): Estado[]{
    return this.estadoService.listarTodos();
  }
  
  remover($event: any, estado: Estado): void{
    $event.preventDefault();
    if(confirm(`Deseja remover a pessoa ${estado.nome}?`)){
      this.estadoService.remover(estado.id!);
      this.estados = this.listarTodos();
    }
  }
}
