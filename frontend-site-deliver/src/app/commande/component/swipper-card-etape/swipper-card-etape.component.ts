import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ServiceGestionAccesCommandeService} from "../../service/service-gestion-acces-commande.service";
import {Commande} from "../../../data/commandes.model";
import {UserService} from "../../../services/api/user.service";
import {CommandeService} from "../../../services/api/commande.service";


@Component({
  selector: 'app-swipper-card-etape',
  templateUrl: './swipper-card-etape.component.html',
  styleUrls: ['./swipper-card-etape.component.scss'],
})
export class SwipperCardEtapeComponent  implements OnInit {

  @Input() commande!: Commande
  indiceEtape = {
    disponibilite: 1,
    configuration: 2,
    controleLivraison: 3,
    financement: 4,
    virement:5,
    dateLivraison: 6,
    packaging: 7
  }
  @Output() closeModal = new EventEmitter<unknown>();

  ngOnInit() {
  }

  constructor(private gestionCommandeService: ServiceGestionAccesCommandeService) { }

  getLastIndex(): number {
    const validSteps = Object.keys(this.commande.etapesHistorique).filter(key => this.autorisationAccesEtape(key as keyof typeof this.indiceEtape));
    return validSteps.length;
  }

  autorisationAccesEtape(etape: keyof typeof this.indiceEtape): boolean {
    const statusIndex = this.indiceEtape[this.commande.status as keyof typeof this.indiceEtape];
    const accesRole = this.gestionCommandeService.autorisationAccesRoleEtapeSite(etape, this.commande.site)
    return (this.indiceEtape[etape] <= statusIndex) && accesRole;
  }

  modifiable(etape: keyof typeof this.indiceEtape): boolean {
    const statusIndex = this.indiceEtape[this.commande.status as keyof typeof this.indiceEtape];
    return (this.indiceEtape[etape] < statusIndex)
  }

  validerCommande($etape: string, $event: any) {
    if (!$etape || !$event) {
      console.error("Erreur : données manquantes lors de l'émission de valider");
    }else{
      this.gestionCommandeService.updateStepData(this.commande.id, $etape, $event);
      this.closeModal.emit();
    }
  }
}
