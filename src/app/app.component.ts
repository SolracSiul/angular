import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from './auth/services/login.service';
import { Usuario } from './shared/models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faCoffee = faCoffee;
  faEdit = faUserEdit;
  
  constructor(private loginService: LoginService, private router: Router){ }

  get usuarioLogado (): Usuario {
    return this.loginService.usuarioLogado
  }

  logout(){
    this.loginService.logout()
    this.router.navigate(['/login']);
  }

}
