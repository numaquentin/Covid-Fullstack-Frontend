import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReservationComponent } from '../reservation/reservation.component';
import { Reservation } from '../model/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private httpClient: HttpClient) {}

  makeReservation(reservation: Reservation) {
    return this.httpClient.post('/api/public/rendezvous/create', reservation);
  }

  deleteReservation(reservation: Reservation){
    return this.httpClient.post(`/api/admin/rendezvous/delete/{id}`, reservation);
  }

  //getReservationByCenterId()
}
