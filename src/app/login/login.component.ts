import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = "admin";

  constructor(private authService: AuthService, private router: Router, ) {}

  onSubmit() {
    // Appel au service d'authentification pour gérer la connexion
    this.authService.login(this.username, this.password).subscribe(response => {
        // Traiter la réponse si nécessaire (redirection, stockage du token, etc.)
        console.log('Connexion réussie :', response);
        const id = `${this.username}:${this.password}`;
        const idBase64 = btoa(id);
        this.redirection(response,this.username,idBase64)
      }, error => {
        // Gérer les erreurs si la connexion échoue
        console.error('Erreur lors de la connexion :', error);
      });
  }

  redirection(response: string, login: string, id: string){
    switch(response) {
      case `Le rôle de l\'utilisateur ${login} est : USER`:
        this.router.navigate([`/user/${id}`])
        break;
      case `Le rôle de l\'utilisateur ${login} est : ADMIN`:
        this.router.navigate([`/admin/${id}`])
        break;
      case `Le rôle de l\'utilisateur ${login} est : SUPERADMIN`:
        this.router.navigate([`/superadmin/${id}`])
        break;
      default:
        this.router.navigate([``])
    }
  }
}