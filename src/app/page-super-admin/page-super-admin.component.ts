import { Component } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center/vaccination-center';
import { VaccinationService } from '../service/vaccination.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-page-super-admin',
  templateUrl: './page-super-admin.component.html',
  styleUrls: ['./page-super-admin.component.scss']
})
export class PageSuperAdminComponent {
  centers: VaccinationCenter[] = [];
  newCenter = {name: '', city: '', address: ''};
  selected?: VaccinationCenter;
  searchedCenters: VaccinationCenter[] = [];
  id: string = '';

  admins: User[] = [];
  newAdmin = {login: '', password: '', center_id: 0};
  selectedA?: User;
  searchedAdmins: User[] = [];

  constructor(private service: VaccinationService, 
              private route: ActivatedRoute,
              private authService: AuthService) {  }

  ngOnInit(): void {
    this.service.getAllCenters().subscribe(resultCenters=>{
      this.centers=resultCenters;
    });
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }

  selectCenter(center: VaccinationCenter){
    this.selected=center;
  }

  handleSearch(event: VaccinationCenter[]){
    this.searchedCenters = event;
  }

  addCenter() {
    if (!(this.newCenter.name === '' || this.newCenter.address === '' || this.newCenter.city === '')){
      this.service.addCenter(this.newCenter.name, this.newCenter.address, this.newCenter.city).subscribe(response => {
        // Traiter la réponse si nécessaire (redirection, stockage du token, etc.)
        console.log('Centre ajouté :', response);
        this.service.getAllCenters().subscribe(resultCenters => {
          this.centers = resultCenters;
        })
      }, error => {
        // Gérer les erreurs si la connexion échoue
        console.error('Erreur lors de l\'ajout du centre :', error);
      });
    }
  }

  deleteCenter(center: VaccinationCenter){
  this.service.deleteCenter(center.id).subscribe(response => {
    this.service.getAllCenters().subscribe(resultCenters => {
      this.centers = resultCenters;
    })
    console.log('Connexion réussie :', response);
  }, error => {
    // Gérer les erreurs si la connexion échoue
    console.error('Erreur lors de la connexion :', error);
    this.service.getAllCenters().subscribe(resultCenters => {
      this.centers = resultCenters;
    })
  });
  }


  selectAdmin(admin: User){
    this.selectedA=admin;
  }

  handleSearchAdmin(event: User[]){
    this.searchedAdmins = event;
  }

  addAdmin() {
    if (!(this.newAdmin.login === '' || this.newAdmin.password === '' || this.newAdmin.center_id === 0)){
      this.authService.createNewAdmin(this.newAdmin.login, this.newAdmin.login, this.newAdmin.center_id, this.id).subscribe(response => {
        // Traiter la réponse si nécessaire (redirection, stockage du token, etc.)
        console.log('Centre ajouté :', response);
        this.authService.getAllAdmins().subscribe(resultAdmins => {
          this.admins = resultAdmins;
        })
      }, error => {
        // Gérer les erreurs si la connexion échoue
        console.error('Erreur lors de l\'ajout du centre :', error);
      });
    }
  }

  deleteAdmin(center: VaccinationCenter){
  this.service.deleteCenter(center.id).subscribe(response => {
    this.service.getAllCenters().subscribe(resultCenters => {
      this.centers = resultCenters;
    })
    console.log('Connexion réussie :', response);
  }, error => {
    // Gérer les erreurs si la connexion échoue
    console.error('Erreur lors de la connexion :', error);
    this.service.getAllCenters().subscribe(resultCenters => {
      this.centers = resultCenters;
    })
  });
  }
}
