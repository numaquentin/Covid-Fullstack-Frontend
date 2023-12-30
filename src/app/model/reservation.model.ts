import { VaccinationCenter } from "../vaccination-center/vaccination-center";

export interface Reservation {
    center: VaccinationCenter;
    name: string;
    surname: string;
    mail: string;
    phone: number;
    date: Date;
  }
  