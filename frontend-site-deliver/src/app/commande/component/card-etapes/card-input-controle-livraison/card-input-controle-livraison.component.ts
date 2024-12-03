import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControleLivraison} from "../../../../data/commandes.model";
import {ServiceGestionAccesCommandeService} from "../../../service/service-gestion-acces-commande.service";

@Component({
  selector: 'app-card-input-controle-livraison',
  templateUrl: './card-input-controle-livraison.component.html',
  styleUrls: ['./card-input-controle-livraison.component.scss'],
})
export class CardInputControleLivraisonComponent implements OnInit {

  @Input() commande!: ControleLivraison

  @Input() disabled!: boolean;
  @Input() idCommande!: string;
  @Output() valider = new EventEmitter<any>();

  ngOnInit() {
  }

  constructor() { }

  validerCommande() {
    this.valider.emit(this.commande);  // Émet les données à valider
  }
}

