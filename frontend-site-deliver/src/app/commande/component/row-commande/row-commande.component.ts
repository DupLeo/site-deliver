import {Component, Input} from '@angular/core';
import {Commande} from '../../../data/commandes.model'


@Component({
  selector: 'app-row-commande',
  templateUrl: './row-commande.component.html',
  styleUrls: ['./row-commande.component.scss'],
})

export class RowCommandeComponent {
  @Input() commandes?: Commande[];
}

