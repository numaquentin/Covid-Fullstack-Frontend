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
  role: string = '';

  constructor(private authService: AuthService, private router: Router, ) {}

  onSubmit() {
    this.authService.login(this.username, this.password)
    .subscribe({
      next: (response: {role: string}) => {
      this.role = response.role;
      console.log('Connexion réussie :', response);
      const id = `${this.username}:${this.password}`;
      const idBase64 = btoa(id);
      this.redirection(this.role,idBase64)
    }, 
    error: (error: any) => {
      console.error('Erreur lors de la connexion :', error);
    }
    });
  }

  redirection(role: string, id: string){
    console.log('Role reçu du backend :', role);
    if (role === "USER"){
      this.router.navigate([`/user/${id}`]);
    } else if (role === "ADMIN"){
      this.router.navigate([`/admin/${id}`]);
    } else if (role === "SUPERADMIN"){
      this.router.navigate([`/superadmin/${id}`]);
    } else {
      this.router.navigate([``]);
    }
  }
}