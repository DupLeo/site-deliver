import {Component, Input, OnInit} from '@angular/core';
import {Commande} from '../../../data/commandes.model'

@Component({
  selector: 'app-card-commande',
  templateUrl: './card-commande.component.html',
  styleUrls: ['./card-commande.component.scss'],
})
export class CardCommandeComponent  implements OnInit {
  @Input() commande!: Commande;
  fermer: boolean = false; // Valeur par défaut


  constructor() { }

  ngOnInit() {}


}
