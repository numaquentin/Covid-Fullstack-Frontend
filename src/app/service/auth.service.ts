import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeaderService } from './header.service';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  log = {login: '', password: ''}
  newUser = {login: '', password: ''}
  newAdmin = {login: '', password: '', centerId: 0 }
  newSuperAdmin = {login: '', password: ''}
  newLogin: string = '';
  newPassword: string = '';
  newRole: string = '';
  newCenter_id: number = 0;

  constructor(private httpClient: HttpClient, private headerService: HeaderService) { }

  

  login(username: string, password: string): Observable<{role: string}> {
    const log = { login: username, password: password };
    const logJson = JSON.stringify(log);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post<{role: string}>('api/public/getRole', log, { headers });
  }
}

