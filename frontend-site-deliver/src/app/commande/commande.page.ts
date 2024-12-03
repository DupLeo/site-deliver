import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { commandes } from '../data/commandes-data';
import { Commande } from '../data/commandes.model'
import  {ServiceGestionAccesCommandeService} from "./service/service-gestion-acces-commande.service";
import {CommandeService} from "../services/api/commande.service";
import {Observable} from "rxjs";



@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  constructor(private serviceAccesCommande: ServiceGestionAccesCommandeService,
              private serviceCommande:CommandeService ) { }


  selectedSegment: string = 'gerer';
  selectedFilter: string = "";
  nbCommandeGerer: number = 0;
  nbCommandeSuivi: number = 0;
  commandesMagasin!: Observable<Commande[]>;

  commandesFiltreRole: Commande[] = [];
  commandesFiltreEtape: Commande[] = [];
  commandesSuivi: Commande[] = [];


  commandesCurrent?: Commande[]


  ngOnInit() {
    this.fetchCommandes()
    this.filterCommandeInit()
    this.updateCounts();
    this.changeTypeCommande();
  }

  onFilterChanged(filter: string) {
    this.selectedFilter = filter;
    this.filterCommandes();
  }

  filterCommandeInit() {
    this.commandesFiltreRole = [];
    this.commandesSuivi = [];

    this.commandesMagasin.subscribe((response: any) => {
      const commandes = response.data;

      commandes.forEach((commande: Commande) => {
        if (this.serviceAccesCommande.autorisationAccesRoleEtape(commande.status)) {
          this.commandesFiltreRole.push(commande);
        } else {
          this.commandesSuivi.push(commande);
        }
      });
      this.commandesFiltreEtape = [...this.commandesFiltreRole];
      this.updateCounts();

    });
  }


  filterCommandes() {
    if (this.selectedFilter) {
      this.commandesFiltreEtape = this.commandesFiltreRole.filter(
        (commande:Commande) => commande.status === this.selectedFilter
      );
    } else {
      this.commandesFiltreEtape = [...this.commandesFiltreRole];
    }
    this.updateCounts();
  }

  updateCounts() {
    this.nbCommandeGerer = this.commandesFiltreEtape.length;
    this.nbCommandeSuivi = this.commandesSuivi.length;
  }

  changeTypeCommande() {
    this.commandesCurrent =
      this.selectedSegment === 'gerer'
        ? this.commandesFiltreEtape
        : this.commandesSuivi;
  }

  fetchCommandes(): void {
    this.commandesMagasin = this.serviceCommande.getAll()
  }

}
