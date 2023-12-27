import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent {
  username: string = '';
  password: string = '';
  role: string = "admin";

  constructor(private authService: AuthService) {}

  onSubmit() {
    // Appel au service d'authentification pour gérer la connexion
    this.authService.login(this.username, this.password, this.role)
      .subscribe(response => {
        // Traiter la réponse si nécessaire (redirection, stockage du token, etc.)
        console.log('Connexion réussie :', response);
      }, error => {
        // Gérer les erreurs si la connexion échoue
        console.error('Erreur lors de la connexion :', error);
      });
  }
}