import {map, Observable} from "rxjs";
import {Commande} from "../../data/commandes.model";
import {UserService} from "../../services/api/user.service";
import {CommandeService} from "../../services/api/commande.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ServiceGestionAccesCommandeService {
  private accesRole = {
    vendeur: ['controleLivraison', 'financement', 'dateLivraison'],
    rco: ['disponibilite', 'configuration'],
    secreteriat: [''],
    expertProduit: [''],
    accessoiriste: ['packaging'],
    financialManager: [''],
    comptabilite: ['virement'],
  };

  private _commandesFiltreRole: Commande[] = [];
  private _commandesFiltreEtape: Commande[] = [];
  private _commandesSuivi: Commande[] = [];
  private _selectedFilter: string = '';

  constructor(
    private userService: UserService,
    private commandeService: CommandeService
  ) {}

  // Getters pour accéder aux commandes
  get commandesFiltreRole(): Commande[] {
    return this._commandesFiltreRole;
  }

  get commandesFiltreEtape(): Commande[] {
    return this._commandesFiltreEtape;
  }

  get commandesSuivi(): Commande[] {
    return this._commandesSuivi;
  }

  get selectedFilter(): string {
    return this._selectedFilter;
  }

  refreshCommandes(): Observable<void> {
    return this.fetchAndFilterCommandes().pipe(
      map(({ filtreRole, suivi }) => {
        this._commandesFiltreRole = filtreRole;
        this._commandesSuivi = suivi;
        this._commandesFiltreEtape = [...filtreRole];
      })
    );
  }

  getCounts(): { nbCommandeGerer: number; nbCommandeSuivi: number } {
    return {
      nbCommandeGerer: this._commandesFiltreEtape.length,
      nbCommandeSuivi: this._commandesSuivi.length,
    };
  }

  autorisationAccesRoleEtape(etape: string): boolean {
    const userInfo = this.userService.getUserInfo();

    if (userInfo && this.accesRole[userInfo.poste]) {
      return this.accesRole[userInfo.poste].includes(etape);
    }

    return false;
  }

  fetchAndFilterCommandes(): Observable<{ filtreRole: Commande[]; suivi: Commande[] }> {
    return this.commandeService.getAll().pipe(
      map((response: any) => {
        const commandes: Commande[] = response.data;
        const filtreRole: Commande[] = [];
        const suivi: Commande[] = [];

        commandes.forEach((commande) => {
          if (this.autorisationAccesRoleEtape(commande.status)) {
            filtreRole.push(commande);
          } else {
            suivi.push(commande);
          }
        });

        return { filtreRole, suivi };
      })
    );
  }

  filterCommandes(filter: string): void {
    this._selectedFilter = filter;
    this._commandesFiltreEtape = filter
      ? this._commandesFiltreRole.filter((commande) => commande.status === filter)
      : [...this._commandesFiltreRole];
  }

  updateStepData(idCommande: string, stepName: string, newData: any) {
    this.commandeService.updateStep(idCommande, stepName, newData).subscribe({
      next: (response) => {
        console.log('Réponse du serveur:', response);
      },
      error: (error) => {
        console.error('Erreur côté serveur:', error);
      },
    });
  }
}
