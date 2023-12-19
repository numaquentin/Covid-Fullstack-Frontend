import { Injectable } from '@angular/core';
import { VaccinationCenter } from './vaccination-center';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {
  CENTERS: VaccinationCenter[] = []
  //CENTERS: VaccinationCenter[] = [
  //  {id: 1, name: 'Hôpital du vélodrome', address: '123 Main Street', city: 'Nancy'},
  //  {id: 2, name: 'Clinique du 93', address: '456 Elm Street', city: 'Paris'},
  //]

  constructor(private httpClient: HttpClient) { }

  getAllVaccinationCenter(): Observable<VaccinationCenter[]>{
    return this.httpClient.get<VaccinationCenter[]>("api/public/centers");
  }

  getCenters(): Observable<VaccinationCenter[]>{
    return of(this.CENTERS);
  }

  //getCenterById(id: Number) : VaccinationCenter | undefined{
  //  return this.CENTERS.find(c=>c.id==id);
  //}

  //getCenterByName(name: string) : VaccinationCenter | undefined{
  //  return this.CENTERS.find(c=>c.name==name);
  //}
}
