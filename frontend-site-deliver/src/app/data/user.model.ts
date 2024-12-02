import { Role } from './role.model'; // Importer le type Role

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  poste: Role;
  ville: string;
}
