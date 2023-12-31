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
  newAdmin = {login: '', password: '', center_id: 0 }
  newSuperAdmin = {login: '', password: ''}
  newLogin: string = '';
  newPassword: string = '';
  newRole: string = '';
  newCenter_id: number = 0;

  constructor(private httpClient: HttpClient, private headerService: HeaderService) { }

  createNewUser(login: string, password: string, createrId: string) {
    this.newUser.login = login;
    this.newUser.password = password;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${createrId}`        
    });
    return this.httpClient.post('api/user/create', this.newUser, {headers});
  }

  createNewAdmin(login: string, password: string, center_id: number, createrId: string) {
    this.newAdmin.login = login;
    this.newAdmin.password = password;
    this.newAdmin.center_id = center_id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${createrId}`        
    });
    return this.httpClient.post('api/admin/create', this.newAdmin, {headers});
  }

  createNewSuperAdmin(login: string, password: string, createrId: string) {
    this.newSuperAdmin.login = login;
    this.newSuperAdmin.password = password;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${createrId}`        
    });
    return this.httpClient.post('api/superadmin/create', this.newSuperAdmin, {headers});
  }

  getAllAdmins() {}

  login(username: string, password: string): Observable<{role: string}> {
    const log = { login: username, password: password };
    const logJson = JSON.stringify(log);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post<{role: string}>('api/public/getRole', log, { headers });
  }
}

