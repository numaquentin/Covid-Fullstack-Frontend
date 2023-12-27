import { Component } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center/vaccination-center';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../service/vaccination.service';
import { ReservationService } from '../service/reservation.service';
import { Reservation } from '../reservation.model';
import { VaccinationCenterComponent } from '../vaccination-center/vaccination-center.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  reservation: Reservation = {
    center: {
      id: 0,
      name: '',
      city: '',
      address: '',
    }, 
    name: '', 
    surname: '', 
    mail:'', 
    phone: 0, 
    date: new Date(),
  }

  constructor(private route: ActivatedRoute, private vaccinationService: VaccinationService, private reservationService: ReservationService) {  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vaccinationService.getCenterById(id).subscribe(resultCenters=>{
      if (resultCenters && resultCenters.length > 0) {
        this.reservation.center = resultCenters[0];
      }
    });
  }

  onSubmit() {
    this.reservationService.makeReservation(this.reservation).subscribe(response => {
      // Traiter la réponse du service si nécessaire
      console.log('Réponse du service de réservation :', response);
    }, error => {
      // Gérer les erreurs si l'appel au service échoue
      console.error('Erreur lors de l\'appel au service de réservation :', error);
    });
  }
}
