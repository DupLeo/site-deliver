import {Component, Input, OnInit, ChangeDetectorRef, Output, EventEmitter} from '@angular/core';
import {Commande, Disponibilite} from "../../../../data/commandes.model";
import {ServiceGestionAccesCommandeService} from "../../../service/service-gestion-acces-commande.service";

@Component({
  selector: 'app-card-input-disponibilite',
  templateUrl: './card-input-disponibilite.component.html',
  styleUrls: ['./card-input-disponibilite.component.scss'],
})
export class CardInputDisponibiliteComponent  implements OnInit {

  @Input() commande!: Disponibilite
  @Input() disabled!: boolean;
  @Input() idCommande!: string;
  @Output() valider = new EventEmitter<any>();

  ngOnInit() {
  }

  constructor() { }

  validerCommande() {
    console.log("this.commande", this.commande)
    this.valider.emit(this.commande);  // Émet les données à valider
  }
}
