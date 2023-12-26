import { Injectable } from '@angular/core';
import { VaccinationCenter } from './vaccination-center';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  constructor(private httpClient: HttpClient) { }

  getAllCenters(): Observable<VaccinationCenter[]>{
    return this.httpClient.get<VaccinationCenter[]>("api/public/centers/all/1");
  }

  getCenterById(id: Number) : Observable<VaccinationCenter | undefined>{
    return this.httpClient.get<VaccinationCenter>(`api/public/centers/id/${id}`);
    //return this.CENTERS.find(c=>c.id==id);
  }

  getCenterByName(name: string) : Observable<VaccinationCenter | undefined>{
    return this.httpClient.get<VaccinationCenter>(`api/public/centers/name/${name}`);
  }
}
