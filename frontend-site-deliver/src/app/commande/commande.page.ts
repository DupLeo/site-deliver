import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  constructor() { }

  commandesGerer = [
    { name: 'Chaise en bois', status: 'valider' },
    { name: 'Table de salle à manger', status: 'preparer' },
    { name: 'Canapé en cuir', status: 'receptionner' },
    { name: 'Bureau de travail', status: 'valider' },
    { name: 'Armoire en métal', status: 'preparer' },
    { name: 'Commode en bois', status: 'valider' },
    { name: 'Chaise de bureau', status: 'receptionner' },
    { name: 'Bibliothèque', status: 'preparer' },
    { name: 'Lampe de chevet', status: 'valider' },
    { name: 'Meuble TV', status: 'receptionner' },
  ];

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

  selectedSegment: string = 'gerer';
  selectedFilter: string = '';
  nbCommandeGerer: number = 0;
  nbCommandeSuivi: number = 0;
  filteredGererCommandes: { name: string, status: string }[] = [];
  commandesCurrent: { name: string, status: string }[] = [];

  ngOnInit() {
    this.filteredGererCommandes = [...this.commandesGerer];
    this.updateCounts();
    this.changeTypeCommande();
  }

  onFilterChanged(filter: string) {
    this.selectedFilter = filter;
    this.filterCommandes();
  }

  filterCommandes() {
    if (this.selectedFilter) {
      this.filteredGererCommandes = this.commandesGerer.filter(
        (commande) => commande.status === this.selectedFilter
      );
    } else {
      this.filteredGererCommandes = [...this.commandesGerer];
    }
    this.updateCounts();
  }

  updateCounts() {
    this.nbCommandeGerer = this.filteredGererCommandes.length;
    this.nbCommandeSuivi = this.commandesSuivi.length;
  }

  changeTypeCommande() {
    this.commandesCurrent =
      this.selectedSegment === 'gerer'
        ? this.filteredGererCommandes
        : this.commandesSuivi;
  }



}
