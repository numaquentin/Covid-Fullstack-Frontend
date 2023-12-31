import { Component } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center/vaccination-center';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../service/vaccination.service';
import { ReservationService } from '../service/reservation.service';
import { Reservation } from '../model/reservation.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  centerId?: number;
  name?: string; 
  surname?: string; 
  email?: string;
  phone?: number; 
  date?: Date;
  
  center?: VaccinationCenter;

  constructor(private route: ActivatedRoute, private vaccinationService: VaccinationService, private reservationService: ReservationService) {  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vaccinationService.getCenterById(id).subscribe(resultCenters=>{
      if (resultCenters && resultCenters.length > 0) {
        this.center = resultCenters[0];
        this.centerId = resultCenters[0].id;
        console.log("centre : ",this.center);
      }
    }, error => {
      console.error("Erreur sur l'importation du centre : ",error);
    });
  }

  onSubmit() {
    if (this.name && this.surname && this.email && this.phone && this.centerId && this.date){
      this.reservationService.makeReservation(this.name, this.surname, this.email, this.phone, this.centerId, this.date).subscribe(response => {
        // Traiter la réponse du service si nécessaire
        console.log('Réponse du service de réservation :', response);
      }, error => {
        // Gérer les erreurs si l'appel au service échoue
        console.error('Erreur lors de l\'appel au service de réservation :', error);
      });
    }
    
  }
}
