import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-input-date-livraison',
  templateUrl: './card-input-date-livraison.component.html',
  styleUrls: ['./card-input-date-livraison.component.scss'],
})
export class CardInputDateLivraisonComponent  implements OnInit {
  @Input() commande!: { estimatedDate: Date };
  @Input() disabled!: boolean;

  constructor() { }

  ngOnInit() {}

}
