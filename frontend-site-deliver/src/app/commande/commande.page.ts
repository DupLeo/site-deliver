import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { commandesGerer } from '../data/commandes-data';
import { Commande } from '../data/interfaceCommande'


@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  constructor() { }


  selectedSegment: string = 'gerer';
  selectedFilter: string = '';
  nbCommandeGerer: number = 0;
  nbCommandeSuivi: number = 0;
  filteredGererCommandes: Commande[] = [];


  commandesSuivi = [
    { name: 'Table basse', status: 'en attente de validation du comptable' },
    { name: 'Chiffonnier', status: 'en cours de livraison' },
    { name: 'Tabouret', status: 'en attente de validation du comptable' },
    { name: 'Lit double', status: 'en cours de livraison' },
    { name: 'Meuble à chaussures', status: 'en attente de validation du comptable' },
    { name: 'Buffet', status: 'en cours de livraison' },
    { name: 'Chaise longue', status: 'en attente de validation du comptable' },
    { name: 'Étagère murale', status: 'en cours de livraison' },
    { name: 'Buffet de cuisine', status: 'en attente de validation du comptable' },
    { name: 'Console d’entrée', status: 'en cours de livraison' },
  ];

  commandesCurrent: { name: string, status: string }[] = [];

  ngOnInit() {
    this.filteredGererCommandes = [...commandesGerer];

    this.updateCounts();
    this.changeTypeCommande();
  }

  onFilterChanged(filter: string) {
    this.selectedFilter = filter;
    this.filterCommandes();
  }

  filterCommandes() {
    if (this.selectedFilter) {
      this.filteredGererCommandes = commandesGerer.filter(
        (commande) => commande.status === this.selectedFilter
      );
    } else {
      this.filteredGererCommandes = [...commandesGerer];
    }
    this.updateCounts();
  }

  updateCounts() {
    this.nbCommandeGerer = this.filteredGererCommandes.length;
    this.nbCommandeSuivi = 10;
  }

  changeTypeCommande() {
    this.commandesCurrent =
      this.selectedSegment === 'gerer'
        ? this.filteredGererCommandes
        : this.commandesSuivi;
  }



}
