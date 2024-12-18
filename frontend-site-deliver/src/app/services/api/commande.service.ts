import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, map, Observable, of} from "rxjs";
import {Commande} from "../../data/commandes.model";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private apiUrl = 'http://localhost:3000/commandes';

  constructor(private http: HttpClient, private router: Router) {}

  create(commande:Commande): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, commande);
  }

  getAll(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.apiUrl}/all`);
  }

  updateStep(id: string, stepName: string, newData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/steps`, {
      stepName,
      newData,
    }).pipe(
      map(response => {
        console.log('Mise à jour réussie:', response);
        return response;
      }),
      catchError(error => {
        console.error('Erreur lors de la mise à jour:', error);
        return of(null);
      })
    );
  }

}
