import { Component } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../service/vaccination.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.scss']
})
export class VaccinationCenterListComponent {
  centers: VaccinationCenter[] = []

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

}
