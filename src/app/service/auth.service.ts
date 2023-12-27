import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signup(user: any) {
    user.id = `${user.name}:${user.password}`;
    user.id = btoa(user.id);
    // Logique de création de compte, appel à une API, etc.
    console.log('Création de compte :', user);
    if (user.role == 'superadmin'){
      return this.httpClient.post('api/superadmin/create', user);
    }
    else {
      return this.httpClient.post('api/admin/create', user);
    }
  }

  login(username: string, password: string, role: string): Observable<any> {
    const id = `${username}:${password}`;
    const idBase64 = btoa(id);
    if (role == "user"){
      return this.httpClient.post('url login user', idBase64);
    }
    else if (role == "admin"){
      return this.httpClient.post('url login admin', idBase64);
    }
    else {
      return this.httpClient.post('url login superadmin', idBase64);
    }
    
  }
}

