import {Component, Input, OnInit} from '@angular/core';
import {DateLivraison} from "../../../../data/commandes.model";

@Component({
  selector: 'app-card-input-date-livraison',
  templateUrl: './card-input-date-livraison.component.html',
  styleUrls: ['./card-input-date-livraison.component.scss'],
})
export class CardInputDateLivraisonComponent  implements OnInit {
  @Input() commande!: DateLivraison
  @Input() disabled!: boolean;

  constructor() { }

  ngOnInit() {}

}
