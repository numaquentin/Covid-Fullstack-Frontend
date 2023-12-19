import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../vaccination.service';
import { VaccinationCenterListComponent } from '../vaccination-center-list/vaccination-center-list.component';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchQuery: string = '';
  //centers: VaccinationCenter[] = [
  //  {id: 1, name: 'Hôpital du vélodrome', address: '123 Main Street', city: 'Nancy'},
  //  {id: 2, name: 'Clinique du 93', address: '456 Elm Street', city: 'Paris'},
  //];

  constructor(private centerService: VaccinationService) { }

  @Output()
  search: EventEmitter<VaccinationCenter[]> = new EventEmitter<VaccinationCenter[]>();

  SearchCenterByCity(){
    this.centerService.getCenters().subscribe(centers => {
      const filteredCenters = centers.filter(center => center.city.toLowerCase() === this.searchQuery.toLowerCase());
      this.search.emit(filteredCenters);
    });    
  }
}
