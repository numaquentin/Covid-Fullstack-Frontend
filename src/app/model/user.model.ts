export interface User {
    id: number;
    role: 'user' | 'admin' | 'superadmin';
    login: string;
    password: string;
    centerId: number;
  }