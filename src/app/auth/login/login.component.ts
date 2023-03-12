import { Component, ViewChild, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Login } from 'src/app/shared/models/login.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  @ViewChild('formLogin') formLogin! : NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;

  constructor(private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute){
      if(this.loginService.usuarioLogado){
        this.router.navigate(['/pessoas/listar'])
      }
    }

    ngOnInit(): void{
      this.route.queryParams.subscribe(params =>{
          this.message = params['erro ao logar']
        })
    }    

    logar(): void {
      this.loading = true;
        if (this.formLogin.form.valid) {
          this.loginService.login(this.login).subscribe((user) => {
        if (user != null) {
          this.loginService.usuarioLogado = user;
          this.loading = false;
          this.router.navigate( ["/home"] ); 
        }else {
          this.message = "Usuário/Senha inválidos.";
        }
        });
      }
      this.loading = false;
      }
      
}
