import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { commandes } from '../data/commandes-data';
import { Commande } from '../data/interfaceCommande'
import  {ServiceGestionAccesCommandeService} from "./service/service-gestion-acces-commande.service";


@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  constructor(private serviceAccesCommande: ServiceGestionAccesCommandeService) { }


  selectedSegment: string = 'gerer';
  selectedFilter: string = "";
  nbCommandeGerer: number = 0;
  nbCommandeSuivi: number = 0;
  commandesFiltreRole: Commande[] = [];
  commandesFiltreEtape: Commande[] = [];
  commandesSuivi: Commande[] = [];


  commandesCurrent: { name: string, status: string }[] = [];

  ngOnInit() {
    this.filterCommandeInit()
    this.updateCounts();
    this.changeTypeCommande();
    this.filterCommandes();
  }

  onFilterChanged(filter: string) {
    this.selectedFilter = filter;
    this.filterCommandes();
  }

  filterCommandeInit() {
    this.commandesFiltreRole = [];
    this.commandesSuivi = [];

    commandes.forEach((commande) => {
      if (this.serviceAccesCommande.autorisationAccesRoleEtape(commande.status)) {
        this.commandesFiltreRole.push(commande);
      } else {
        this.commandesSuivi.push(commande);
      }
    });

    this.updateCounts();
  }

  filterCommandes() {
    if (this.selectedFilter) {
      this.commandesFiltreEtape = this.commandesFiltreRole.filter(
        (commande) => commande.status === this.selectedFilter
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
}
