export interface User {
    id: string
    role: 'user' | 'admin' | 'superadmin';
    center_id: number;
  }