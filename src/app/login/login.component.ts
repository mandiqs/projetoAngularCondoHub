import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { DadosUsuario } from '../models/dados-usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  user: DadosUsuario = {
    email: '',
    senha: '',
    nome: '',
    apartamento: '',
    tipoUsuario: '',
    id: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.user)
      .then(() => {
        sessionStorage.setItem('user', this.user.email);

      })
      .catch(error => {
        console.error('Erro ao logar:', error);
        alert('E-mail ou senha incorreto!');
      });
  }
  resetForm(): void {
    this.user = {
      email: '',
      senha: '',
      nome: '',
      apartamento: '',
      tipoUsuario: '',
      id: '',
    };
  }
}

