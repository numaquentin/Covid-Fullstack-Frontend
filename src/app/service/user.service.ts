import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient: HttpClient, private httpHeader: HttpHeaders ) { }

  getUserById(id: String) : Observable<User | undefined>{
    return this.httpClient.get<User>(`api/public/centers/id/${id}`);
  }

  getMedecinsByCenter(center_id: Number, headers: HttpHeaders) : Observable<User[]>{
    return this.httpClient.get<User[]>(`url de la requete des medecins par rapport à un centre donné`, {headers});
  }

  getLogin(id: string) : string {
    return id;
  }

}
