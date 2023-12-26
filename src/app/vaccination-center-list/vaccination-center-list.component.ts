import { Component } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../vaccination.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.scss']
})
export class VaccinationCenterListComponent {
  //centers: VaccinationCenter[] = []
  centers: VaccinationCenter[] = [
    {id: 1, name: 'Hôpital du vélodrome', address: '123 Main Street', city: 'Nancy'},
    {id: 2, name: 'Clinique du 93', address: '456 Elm Street', city: 'Paris'},
  ]

  selected?: VaccinationCenter;
  searchedCenters: VaccinationCenter[] = [];

  constructor(private service: VaccinationService) {  }

  ngOnInit(): void {
  //  this.service.getAllVaccinationCenter().subscribe(resultCenters=>{
  //    this.centers=resultCenters;
  //  });
  //  this.centers=this.service.getAllVaccinationCenter();
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

}
