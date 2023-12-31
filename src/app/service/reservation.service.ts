import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../model/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private httpClient: HttpClient) {}

  makeReservation(_name: string, _surname: string, _email: string, _phone: number, _centerId: number, _date: Date) : Observable<{message: string}>{
    const newReservation = {name: _name, 
      surname: _surname, 
      email: _email, 
      phone: _phone, 
      date: _date, 
      centerId: _centerId}
    const json = JSON.stringify(newReservation);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    console.log("Réservation : ",json)
    return this.httpClient.post<{message: string}>('api/public/rendezvous/create', json, {headers});
  }

  deleteReservation(reservation: Reservation, token: string){ 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${token}`}); 
    return this.httpClient.delete(`api/admin/rendezvous/delete/${reservation.id}`, {headers});
  }


  getRDVbyCenter(token: string): Observable<Reservation[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : `Basic ${token}`});
    return this.httpClient.get<Reservation[]>('api/admin/rendezvous/byCenterId', {headers})
  }

  getRDVbyName(name: string, token: string): Observable<Reservation[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : `Basic ${token}`});
    return this.httpClient.get<Reservation[]>(`api/user/rendezvous/byName/${name}`, {headers})
  }

  Vaccinate(reservation: Reservation, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : `Basic ${token}`});
    return this.httpClient.put(`api/user/rendezvous/vaccinate/${reservation.id}`, {headers})
  }
}
