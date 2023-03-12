import { Component, OnInit , ViewChild} from '@angular/core';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css']
})
export class EditarCidadeComponent implements OnInit{
  faSave = faSave;
  faArrowLeft= faArrowLeft;

  @ViewChild("formCidade") formCidade!: NgForm;
  cidade!: Cidade;

  constructor(
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void{
    let id = +this.route.snapshot.params['id'];
    const res = this.cidadeService.buscarCidadePorId(id);
    if(res !== undefined){
      this.cidade = res;
    }else{
      throw new Error ("Cidade não encontra: id = " + id)
    }
  }

  atualizar(): void{
    if(this.formCidade.form.valid){
      this.cidadeService.atualizar(this.cidade);
      this.router.navigate(['/cidades/listar'])
    }
  }
}
