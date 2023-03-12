import { Component, OnInit, ViewChild } from '@angular/core';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { CidadeService } from '../services/cidade.service';
import { Router } from '@angular/router';
import { Cidade } from 'src/app/shared/models/cidade.model';
@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrls: ['./inserir-cidade.component.css']
})
export class InserirCidadeComponent implements OnInit {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade!:Cidade;

  faSave = faSave;
  faArrowLeft = faArrowLeft;

  constructor(
    private cidadeService: CidadeService,
    private router:Router
  ){}

  ngOnInit(): void{
    this.cidade = new Cidade();
  }

  inserir(): void{
    if(this.formCidade.form.valid){
      this.cidadeService.inserir(this.cidade);
      this.router.navigate(['/cidades/listar']);
    }
  }
}
