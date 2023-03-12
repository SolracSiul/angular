import { Component, ViewChild, OnInit } from '@angular/core';
import { faSave, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { NgForm } from '@angular/forms';
import { EnderecoService } from '../services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit{
  faSave = faSave;
  faArrowLeft= faArrowLeft;

  @ViewChild("formEndereco") formEndereco!: NgForm;
  endereco!: Endereco;
  constructor(
    private enderecoService: EnderecoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void{
    let id = +this.route.snapshot.params['id'];
    const res = this.enderecoService.buscarPorId(id);
    if(res !== undefined){
      this.endereco = res;
    }else{
      throw new Error ("Endereco não encontra: id = " + id)
    }
  }
  atualizar(): void{
    if(this.formEndereco.form.valid){
      this.enderecoService.atualizar(this.endereco);
      this.router.navigate(['/enderecos/listar'])
    }
  }

}
