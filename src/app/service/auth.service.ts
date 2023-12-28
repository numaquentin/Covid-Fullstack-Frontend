import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient, private headerService: HeaderService) { }

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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Autorisation': `Basic ${idBase64}`
    });
    if (role == "user"){
      return this.httpClient.post('url login user', idBase64, {headers});
    }
    else if (role == "admin"){
      this.headerService.setHeader(headers);
      return this.httpClient.post('url login admin', idBase64, {headers});
    }
    else {
      return this.httpClient.post('url login superadmin', idBase64, {headers});
    }
    
  }
}

