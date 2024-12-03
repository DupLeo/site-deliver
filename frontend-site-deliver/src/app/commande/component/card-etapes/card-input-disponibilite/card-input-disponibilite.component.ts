import {Component, Input, OnInit} from '@angular/core';
import {Commande, Disponibilite} from "../../../../data/commandes.model";

@Component({
  selector: 'app-card-input-disponibilite',
  templateUrl: './card-input-disponibilite.component.html',
  styleUrls: ['./card-input-disponibilite.component.scss'],
})
export class CardInputDisponibiliteComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  @Input() commande!: Disponibilite
  @Input() disabled!: boolean;

}
