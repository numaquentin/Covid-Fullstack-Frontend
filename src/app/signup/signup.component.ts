import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  id: number = 0; 
  login: string = ''; 
  password: string = ''; 
  role: string = '';
  center_id: number = 0;

  constructor(private authService: AuthService) { }

  onSubmit() {
  //  this.authService.createNewAccount(this.login, this.password, ).subscribe(response => {
      // Traiter la réponse de l'API si nécessaire
  //    console.log('Réponse de l\'API :',response); 
  //  }, error => {
      // Gérer les erreurs si l'appel à l'API échoue
  //    console.error('Erreur lors de l\'appel à l\'API :', error);
  //  });
    // Envoyer les données du formulaire au service de création de compte
    //console.log('Formulaire soumis :', this.user);
  }
}

