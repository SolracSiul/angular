import { NgForm } from '@angular/forms';
import { ViewChild, Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/shared/models/estado.model';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { EstadoService } from '../services/estado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-estado',
  templateUrl: './inserir-estado.component.html',
  styleUrls: ['./inserir-estado.component.css']
})
export class InserirEstadoComponent {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado!:Estado;

 faSave = faSave;
 faArrowLeft = faArrowLeft;

 constructor(private estadoService : EstadoService, private router: Router){}
 ngOnInit(): void{
  this.estado = new Estado();
}
inserir(): void{
  if(this.formEstado.form.valid){
    this.estadoService.inserir(this.estado);
    this.router.navigate(['/estados/listar']);
    }
  }
}
