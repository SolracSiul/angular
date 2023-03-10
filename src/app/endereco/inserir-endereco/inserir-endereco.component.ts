import { Component, ViewChild } from '@angular/core';
import { EnderecoService } from '../services/endereco.service';
import { faSave, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inserir-endereco',
  templateUrl: './inserir-endereco.component.html',
  styleUrls: ['./inserir-endereco.component.css']
})
export class InserirEnderecoComponent {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco!:Endereco;

 faSave = faSave;
 faArrowLeft = faArrowLeft;
 
  constructor(
    private enderecoService: EnderecoService,
    private router:Router
  ){}
  
  ngOnInit(): void{
    this.endereco = new Endereco();
  }

  inserir(): void{
    if(this.formEndereco.form.valid){
      this.enderecoService.inserir(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
}
