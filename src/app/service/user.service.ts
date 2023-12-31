import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  log = {login: '', password: ''}
  newUser = {login: '', password: ''}
  newAdmin = {login: '', password: '', centerId: 0 }
  newSuperAdmin = {login: '', password: ''}
  newLogin: string = '';
  newPassword: string = '';
  newRole: string = '';
  newCenter_id: number = 0;

  constructor( private httpClient: HttpClient) { }

  getUserByToken(id: String) : Observable<User>{
    return this.httpClient.get<User>(`api/public/centers/id/${id}`);
  }

  getMedecinsByCenter(token: string) : Observable<User[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${token}`       
    });
    return this.httpClient.get<User[]>("api/admin/getAllUsersByCenterId", {headers});
  }

  createNewUser(login: string, password: string, token: string) {
    this.newUser.login = login;
    this.newUser.password = password;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${token}`,  
      'X-Requested-With': 'XMLHttpRequest'        
    });
    const newUserJson = JSON.stringify(this.newUser);
    return this.httpClient.post('api/admin/create', newUserJson, {headers});
  }

  createNewAdmin(login: string, password: string, center_id: number, token: string) {
    this.newAdmin.login = login;
    this.newAdmin.password = password;
    this.newAdmin.centerId = center_id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${token}`,  
      'X-Requested-With': 'XMLHttpRequest'         
    });
    const newAdminJson = JSON.stringify(this.newAdmin);
    return this.httpClient.post('api/superadmin/create', newAdminJson, {headers});
  }

  getAllAdmins(token: string): Observable<User[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${token}`   ,  
      'X-Requested-With': 'XMLHttpRequest'      
    });
    return this.httpClient.get<User[]>("api/superadmin/getAllAdminUsers", {headers})
  }

  deleteAdmin(id: number, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${token}`        
    });
    return this.httpClient.delete(`api/superadmin/deleteUser/${id}`, { headers });
  }

  createNewSuperAdmin(login: string, password: string, token: string) {
    this.newSuperAdmin.login = login;
    this.newSuperAdmin.password = password;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${token}`,  
      'X-Requested-With': 'XMLHttpRequest'      
    });
    const newSuperAdminJson = JSON.stringify(this.newSuperAdmin);
    return this.httpClient.post('api/superadmin/supercreate', newSuperAdminJson, {headers});
  }



}
