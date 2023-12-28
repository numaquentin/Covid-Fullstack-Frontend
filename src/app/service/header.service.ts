import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private header?: HttpHeaders;

  setHeader(headerValue: HttpHeaders){
    this.header=headerValue;
  }

  getHeader(): HttpHeaders | undefined {
    return this.header;
  }
}
