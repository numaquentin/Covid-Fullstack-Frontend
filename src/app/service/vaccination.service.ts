import { Injectable } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center/vaccination-center';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderService } from './header.service';
import { VaccinationCenterComponent } from '../vaccination-center/vaccination-center.component';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {
  newCenter = {name: '', address: '', city: ''}

  constructor(private httpClient: HttpClient, private headerService: HeaderService) { }

  getAllCenters(): Observable<VaccinationCenter[]>{
    return this.httpClient.get<VaccinationCenter[]>("api/public/centers/all/1");
  }

  getCenterById(id: Number) : Observable<VaccinationCenter[] | undefined>{
    return this.httpClient.get<VaccinationCenter[]>(`api/public/centers/id/${id}`);
  }

  getCenterByName(name: string) : Observable<VaccinationCenter | undefined>{
    return this.httpClient.get<VaccinationCenter>(`api/public/centers/name/${name}`);
  }

  addCenter(n: string, a: string, c: string) {
    const url = 'api/superadmin/centers/add';

    // Récupérez le HttpHeaders contenant les informations de connexion du super administrateur
    const headers = this.headerService.getHeader();

    // Créez le corps de la requête
    const body = { n, a, c };

    // Effectuez la requête POST
    return this.httpClient.post(url, body, { headers });
  }

  deleteCenter(id: number) {
    const headers = this.headerService.getHeader();
    return this.httpClient.post(`api/superadmin/center/deletion/${id}`, { headers });
  }
}
