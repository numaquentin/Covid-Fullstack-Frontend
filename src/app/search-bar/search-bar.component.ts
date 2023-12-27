import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../service/vaccination.service';
import { VaccinationCenterListComponent } from '../vaccination-center-list/vaccination-center-list.component';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchQuery: string = '';

  constructor(private centerService: VaccinationService) { }

  @Output()
  search: EventEmitter<VaccinationCenter[]> = new EventEmitter<VaccinationCenter[]>();

  SearchCenter(){
    this.centerService.getAllCenters().subscribe(centers => {
      const filteredCenters = centers.filter(center => center.city.toLowerCase() === this.searchQuery.toLowerCase() || center.name.toLowerCase() === this.searchQuery.toLowerCase());
      this.search.emit(filteredCenters);
    });    
  }
}
