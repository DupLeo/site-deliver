import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Packaging} from "../../../../data/commandes.model";
import {ServiceGestionAccesCommandeService} from "../../../service/service-gestion-acces-commande.service";

@Component({
  selector: 'app-card-input-packaging-pret',
  templateUrl: './card-input-packaging-pret.component.html',
  styleUrls: ['./card-input-packaging-pret.component.scss'],
})
export class CardInputPackagingPretComponent  implements OnInit {
  @Input() commande!: Packaging
  @Input() disabled!: boolean;
  @Output() valider = new EventEmitter<any>();

  ngOnInit() {
  }

  constructor() { }

  validerCommande() {
    this.valider.emit(this.commande);  // Émet les données à valider
  }

}
