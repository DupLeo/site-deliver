import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-commande',
  templateUrl: './card-commande.component.html',
  styleUrls: ['./card-commande.component.scss'],
})
export class CardCommandeComponent  implements OnInit {
  @Input() commande!: { name: string; status: string; etapesHistorique: { [key: string]: { donnees: any } } };


  constructor() { }

  ngOnInit() {}

}
