import {Component, Input, OnInit} from '@angular/core';
import {ControleLivraison} from "../../../../data/commandes.model";

@Component({
  selector: 'app-card-input-controle-livraison',
  templateUrl: './card-input-controle-livraison.component.html',
  styleUrls: ['./card-input-controle-livraison.component.scss'],
})
export class CardInputControleLivraisonComponent implements OnInit {

  @Input() commande!: ControleLivraison

  selectedDate: string | undefined;
  @Input() disabled!: boolean;

  constructor() { }

  ngOnInit() {
    this.selectedDate = this.commande.date
  }
}

