import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../model/reservation.model';
import { User } from '../model/user.model';
import { ReservationService } from '../service/reservation.service';
import { UserService } from '../service/user.service';
import { VaccinationCenter } from '../vaccination-center/vaccination-center';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.scss']
})
export class PageAdminComponent {
  admin?: User;
  adminCenter?: VaccinationCenter;
  token: string = '';
  reservations: Reservation[] = []
  medecins: User[] = []
  newMedecin = {login: '', password: ''};
  newUser = {login:'', password:''};

  constructor(private RDVService: ReservationService, 
              private route: ActivatedRoute, 
              private userService: UserService) {  }

  ngOnInit(): void {
    this.token = String(this.route.snapshot.paramMap.get('token'));
    this.userService.getMedecinsByCenter(this.token).subscribe(resultList =>{
      this.medecins=resultList;
      console.log('Importation de la liste de médecins réussie :', resultList);
    }, error => {
      console.error('Erreur lors de l\'importation de la liste de médecins :', error);
    })
    this.RDVService.getRDVbyCenter(this.token).subscribe(resultList =>{
      this.reservations = resultList;
      console.log('Importation de la liste de réservations réussie :', resultList);
    }, error => {
      console.error('Erreur lors de l\'importation de la liste de réservations :', error);
    })
  }

  deleteRDV(rdv: Reservation){
    this.RDVService.deleteReservation(rdv,this.token).subscribe(response => {
        console.log('Connexion réussie :', response);
    }, error => {
      console.error('Erreur lors de la connexion :', error);
    });
    this.RDVService.getRDVbyCenter(this.token).subscribe(resultList =>{
      this.reservations = resultList;
      console.log('Importation de la liste de réservations réussie :', resultList);
    }, error => {
      console.error('Erreur lors de l\'importation de la liste de réservations :', error);
    })
  }

  addMedecin() {
    this.userService.createNewUser(this.newMedecin.login, this.newMedecin.password, this.token).subscribe(response => {
      this.userService.getMedecinsByCenter(this.token).subscribe(resultUsers => {
        this.medecins = resultUsers;
      })
    }, error => {
      this.userService.getAllAdmins(this.token).subscribe(resultUsers => {
        this.medecins = resultUsers;
      })
    });
  }
}
