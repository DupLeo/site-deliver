import {ServiceGestionAccesCommandeService} from "./service/service-gestion-acces-commande.service";
import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {Commande} from "../data/commandes.model";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {
  selectedSegment: string = 'gerer';

  constructor(private serviceAccesCommande: ServiceGestionAccesCommandeService) {}

  private refreshInterval: any;  // Variable pour stocker l'intervalle


  ngOnInit() {
    this.refreshCommandes();
  }

  get commandesFiltreEtape(): Commande[] {
    return this.serviceAccesCommande.commandesFiltreEtape;
  }

  get commandesSuivi(): Commande[] {
    return this.serviceAccesCommande.commandesSuivi;
  }

  get nbCommandeGerer(): number {
    return this.serviceAccesCommande.getCounts().nbCommandeGerer;
  }

  get nbCommandeSuivi(): number {
    return this.serviceAccesCommande.getCounts().nbCommandeSuivi;
  }

  refreshCommandes(): void {
    this.serviceAccesCommande.refreshCommandes().subscribe();
  }

  onFilterChanged(filter: string): void {
    this.serviceAccesCommande.filterCommandes(filter);
  }

  doRefresh(event: any): void {
    this.serviceAccesCommande.refreshCommandes().subscribe({
      next: () => {
        // Rafraîchissement terminé
        event.target.complete();
      },
      error: () => {
        // En cas d'erreur, on termine quand même
        event.target.complete();
      },
    });
  }
}
