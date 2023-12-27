import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReservationComponent } from '../reservation/reservation.component';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private httpClient: HttpClient) {}

  makeReservation(reservation: any) {
    return this.httpClient.post('url du rdv', reservation);
    console.log('Données de réservation envoyées au service :', reservation);
  }
}
