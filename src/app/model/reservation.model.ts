import { VaccinationCenter } from "../vaccination-center/vaccination-center";

export interface Reservation {
    id: number;
    email: string;
    phone: number;
    name: string;
    surname: string;
    date: Date;
    vaccination: number;
    centerId: number;
  }
  