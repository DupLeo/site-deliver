import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/user'; // URL de base pour les API utilisateur

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const bodyData = { email, password };
    return this.http.post(`${this.apiUrl}/login`, bodyData).pipe(
      tap((response: any) => {
        if (response.status && response.token) {
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }



  register(firstname: string, lastname: string, email: string, password: string): Observable<any> {
    const bodyData = { firstname, lastname, email, password };
    return this.http.post(`${this.apiUrl}/create`, bodyData);
  }

  // Stocker les informations de session
  saveSession(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Déconnexion
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
