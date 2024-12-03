import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {firstValueFrom, Observable} from "rxjs";
import {ArticleModel} from "../../data/article.model";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private apiUrl = 'http://localhost:3000/catalogue';

  constructor(private http: HttpClient, private router: Router) { }

  getAll(): Observable<ArticleModel[]> {
    return this.http.get<ArticleModel[]>(`${this.apiUrl}/all`);
  }

  getArticle(idA: number): Observable<any> {
    return this.http.get<ArticleModel>(`${this.apiUrl}/getAnArticle?id=${idA}`);
  }

}
