import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VaccinationCenter } from '../vaccination-center/vaccination-center';
import { VaccinationService } from '../service/vaccination.service';
import { VaccinationCenterListComponent } from '../vaccination-center-list/vaccination-center-list.component';
import { Output, EventEmitter } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchQuery: string = '';

  constructor(private centerService: VaccinationService, private authService: AuthService, private userService: UserService) { }

  @Output() search: EventEmitter<VaccinationCenter[]> = new EventEmitter<VaccinationCenter[]>();

  SearchCenter(){
    //this.centerService.
    this.centerService.getAllCenters().subscribe(centers => {
      const filteredCenters = centers.filter(center => 
        center.city.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
        center.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.search.emit(filteredCenters);
    });    
  }
}
