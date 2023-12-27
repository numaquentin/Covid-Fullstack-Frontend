export interface Reservation {
    id: number
    login: string;
    role: 'user' | 'admin' | 'superadmin';
  }