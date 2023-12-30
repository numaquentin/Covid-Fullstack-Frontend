import { Component } from '@angular/core';
import { VaccinationService } from '../service/vaccination.service';
import { VaccinationCenter } from '../vaccination-center/vaccination-center';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderService } from '../service/header.service';
import { User } from '../model/user.model'
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { VaccinationCenterComponent } from '../vaccination-center/vaccination-center.component';
import { Reservation } from '../model/reservation.model';
import { ReservationService } from '../service/reservation.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.scss']
})
export class PageAdminComponent {

  adminCenter?: VaccinationCenter;
  user: User = { id: '', role: 'admin', center_id: 0};
  reservations: Reservation[] = []
  medecins: User[] = []
  newMedecin = {login: '', password: ''};
  newUser: User = {id:'', role:'user', center_id:0};

  constructor(private service: VaccinationService, 
              private RDVService: ReservationService, 
              private route: ActivatedRoute, 
              private authService: AuthService, 
              private headerService : HeaderService, 
              private userService: UserService) {  }

  ngOnInit(): void {
    //this.httpHeader = this.headerService.getHeader();
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(id).subscribe(resultUser=>{
      if (resultUser){
        this.user=resultUser;
        this.service.getCenterById(this.user.center_id).subscribe(resultCenter=>{
          if (resultCenter){
            this.adminCenter=resultCenter[0];
          } else { console.error(`Centre avec l'ID ${this.user.center_id} non trouvé`);}
        });
      } else { console.error(`Utilisateur avec l'ID ${id} non trouvé`);}
    });
    this.userService.getMedecinsByCenter(this.user.center_id,this.headerService.getHeader()).subscribe(resultList =>{
      this.medecins=resultList;
      console.log('Importation de la liste de médecins réussie :', resultList);
    }, error => {
      console.error('Erreur lors de l\'importation de la liste de médecins :', error);
    })
  }

  deleteRDV(rdv: Reservation){
    this.RDVService.deleteReservation(rdv).subscribe(response => {
        // Traiter la réponse si nécessaire (redirection, stockage du token, etc.)
        console.log('Connexion réussie :', response);
    }, error => {
      // Gérer les erreurs si la connexion échoue
      console.error('Erreur lors de la connexion :', error);
    });
  }

  addMedecin(){
    this.authService.createNewUser(this.newMedecin.login, this.newMedecin.password, this.user.id);
  }

  getUserLogin(id: string) : string {
    return this.userService.getLogin(id);
  }
}
