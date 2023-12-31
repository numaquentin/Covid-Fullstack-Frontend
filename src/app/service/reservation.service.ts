import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservation } from '../model/reservation.model';
import { Observable } from 'rxjs';

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

  deleteReservation(reservation: Reservation){   
    return this.httpClient.post(`api/admin/rendezvous/delete/{id}`, reservation);
  }

  getRDVbyCenter(token: string): Observable<Reservation[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    return this.httpClient.get<Reservation[]>('api/admin/rendezvous/byCenterId', {headers})
  }
}
