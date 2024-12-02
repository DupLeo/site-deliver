import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';  // Pour naviguer après la déconnexion
import { User } from '../../data/user.model';  // Importer le type User

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/user'; // URL de base pour les API utilisateur

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    const bodyData = { email, password };
    return this.http.post<{ status: boolean, token: string, user: User }>(`${this.apiUrl}/login`, bodyData).pipe(
      tap((response) => {
        if (response.status && response.token) {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('userInfo', JSON.stringify(response.user));
        }
      })
    );
  }


  register(firstname: string, lastname: string, email: string, password: string, poste: string, ville: string): Observable<any> {
    const bodyData = { firstname, lastname, email, password, poste, ville };
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
    localStorage.removeItem('userInfo');  // Supprimer les informations utilisateur lors de la déconnexion
    this.router.navigate(['/conn-auth']);  // Ajustez l'URL en fonction de votre application
    window.location.reload();

  }

  // Récupérer les informations utilisateur
  getUserInfo(): User | null {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : null;
  }
}
