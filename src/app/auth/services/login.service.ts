import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of} from 'rxjs'
import { Login } from 'src/app/shared/models/login.model';
import { Usuario } from 'src/app/shared/models/usuario.model';

const LS_CHAVE: string = 'usuarioLogado';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private router: Router) { }

  public get usuarioLogado(): Usuario{
    let user = localStorage[LS_CHAVE]; 
    return (user ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario: Usuario){
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout(){
    delete localStorage[LS_CHAVE];
  }
  login(login: Login) : Observable<Usuario | null>{
    let user = new Usuario(1, 'sorak-func', login.login,  login.senha, 'FUNC');
    if (login.login == login.senha) {
        if (login.login == "admin") {
          user = new Usuario(1, "Sorak-Admin", 
          login.login, login.senha, "ADMIN");
        }
        else if (login.login == "gerente") {
          user = new Usuario(1, "Sorak-Gerente", 
          login.login, login.senha, "GERENTE");
      }
      return of(user);
      }
      else {
        return of(null);
      }
  }
}
