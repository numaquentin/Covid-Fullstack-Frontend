import { Component } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../vaccination.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  center?: VaccinationCenter;
  name?: string;
  surname?: string;
  mail?: string;
  phone?: number;
  date?: Date;

  constructor(private route: ActivatedRoute, private vaccinationService: VaccinationService) {  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vaccinationService.getCenterById(id).subscribe(resultCenters=>{
      if (resultCenters && resultCenters.length > 0) {
        this.center = resultCenters[0];
      }
    });
  }

  onSubmit() {
    //this.authService.signup(this.user).subscribe(repsonse => {
      // Traiter la réponse de l'API si nécessaire
      //console.log('Réponse de l\'API :',repsonse); 
    //}, error => {
      // Gérer les erreurs si l'appel à l'API échoue
      //console.error('Erreur lors de l\'appel à l\'API :', error);
    //});
    // Envoyer les données du formulaire au service de création de compte
  }

}
