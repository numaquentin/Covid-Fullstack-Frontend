import { Component } from '@angular/core';
import { VaccinationService } from '../service/vaccination.service';
import { VaccinationCenter } from '../vaccination-center/vaccination-center';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.scss']
})
export class PageAdminComponent {

  centers: VaccinationCenter[] = []
  newCenter = {name: '', city: '', address: ''}
  selected?: VaccinationCenter;
  searchedCenters: VaccinationCenter[] = [];

  constructor(private service: VaccinationService) {  }

  ngOnInit(): void {
    this.service.getAllCenters().subscribe(resultCenters=>{
      this.centers=resultCenters;
    });
  }

  isSpecialCenter(center: VaccinationCenter){
    return center.city == "Nancy"
  }

  selectCenter(center: VaccinationCenter){
    this.selected=center;
  }

  onDeleted(center: VaccinationCenter){
    delete this.selected;
    this.centers.splice(this.centers.indexOf(center), 1);
  }

  handleSearch(event: VaccinationCenter[]){
    this.searchedCenters = event;
  }

  addCenter() {
    this.service.addCenter(this.newCenter.name, this.newCenter.address, this.newCenter.city).subscribe(response => {
        // Traiter la réponse si nécessaire (redirection, stockage du token, etc.)
        console.log('Connexion réussie :', response);
      }, error => {
        // Gérer les erreurs si la connexion échoue
        console.error('Erreur lors de la connexion :', error);
      });
  }
}
