import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Virement} from "../../../../data/commandes.model";
import {ServiceGestionAccesCommandeService} from "../../../service/service-gestion-acces-commande.service";

@Component({
  selector: 'app-card-input-virement',
  templateUrl: './card-input-virement.component.html',
  styleUrls: ['./card-input-virement.component.scss'],
})
export class CardInputVirementComponent  implements OnInit {
  @Input() commande!: Virement;
  @Input() disabled!: boolean;
  @Output() valider = new EventEmitter<any>();

  ngOnInit() {
  }

  constructor() { }

  validerCommande() {
    this.valider.emit(this.commande);  // Émet les données à valider
  }

}
