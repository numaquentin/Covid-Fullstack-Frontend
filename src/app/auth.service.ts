import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signup(user: any) {
    user.id = user.login.concat(user.password.toString());
    Md5.hashStr(user.id);
    // Logique de création de compte, appel à une API, etc.
    console.log('Création de compte :', user);
    // Appel à une API pour créer le compte, etc.
    // Exemple : return this.http.post('url_de_votre_api', user);
  }
}

