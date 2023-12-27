import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signup(user: any) {
    user.id = user.login.concat(":");
    user.id = user.password.concat(user.password.toString());
    Md5.hashStr(user.id);
    user.id.print()
    // Logique de création de compte, appel à une API, etc.
    console.log('Création de compte :', user);
    // Appel à une API pour créer le compte, etc.
    return this.httpClient.post('url_de_votre_api', user);
  }
}

