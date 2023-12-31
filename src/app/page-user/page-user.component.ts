import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../model/reservation.model';
import { User } from '../model/user.model';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.scss']
})
export class PageUserComponent {
  user?: User;
  token: string = '';
  selectedR?: Reservation;
  reservations: Reservation[] = [];
  searchedRDVs: Reservation[] = [];

  @Output() searchRDV: EventEmitter<Reservation[]> = new EventEmitter<Reservation[]>();
  searchQuery: string = '';


  constructor(private RDVService: ReservationService, 
    private route: ActivatedRoute) {  }
  

  ngOnInit(): void {
    this.token = String(this.route.snapshot.paramMap.get('token'));
    //this.RDVService.getRDVbyCenter(this.token).subscribe(resultList =>{
    //  this.reservations = resultList;
    //  console.log('Importation de la liste de réservations réussie :', resultList);
    //}, error => {
    //  console.error('Erreur lors de l\'importation de la liste de réservations :', error);
    //})
  }

  confirmRDV(rdv: Reservation){
    this.RDVService.Vaccinate(rdv, this.token).subscribe(resultList =>{
      console.log('Confirmation de la réservation réussie :', resultList);
    } , error => {
      console.error('Erreur lors de la confirmation de la réservation :', error);
    })
  }

  SearchPatient(token: string){
    this.RDVService.getRDVbyName(this.searchQuery, token).subscribe(resultRDVs => {
      this.searchRDV.emit(resultRDVs);
    }); 
  }

  handleSearch(event: Reservation[]){
    this.searchedRDVs = event;
  }
}
