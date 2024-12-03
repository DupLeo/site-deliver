import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DateLivraison} from "../../../../data/commandes.model";
import {ServiceGestionAccesCommandeService} from "../../../service/service-gestion-acces-commande.service";

@Component({
  selector: 'app-card-input-date-livraison',
  templateUrl: './card-input-date-livraison.component.html',
  styleUrls: ['./card-input-date-livraison.component.scss'],
})
export class CardInputDateLivraisonComponent  implements OnInit {
  @Input() commande!: DateLivraison
  @Input() disabled!: boolean;
  @Output() valider = new EventEmitter<any>();

  ngOnInit() {
  }

  constructor() { }

  validerCommande() {
    this.valider.emit(this.commande);  // Émet les données à valider
  }

}
