import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  user = {id: '', login: '', password: '' };

  constructor(private authService: AuthService) { }

  onSubmit() {
    //this.authService.signup(this.user).subscribe(repsonse => {
      // Traiter la réponse de l'API si nécessaire
      //console.log('Réponse de l\'API :',repsonse); 
    //}, error => {
      // Gérer les erreurs si l'appel à l'API échoue
      //console.error('Erreur lors de l\'appel à l\'API :', error);
    //});
    // Envoyer les données du formulaire au service de création de compte
    console.log('Formulaire soumis :', this.user);
  }
}

