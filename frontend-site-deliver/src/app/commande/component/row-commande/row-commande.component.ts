import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-row-commande',
  templateUrl: './row-commande.component.html',
  styleUrls: ['./row-commande.component.scss'],
})

export class RowCommandeComponent {
  @Input() commandes: { name: string; status: string; etapesHistorique: { [key: string]: { donnees: any } } }[] = [];
}

