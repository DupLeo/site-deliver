import {Component, Input, OnInit} from '@angular/core';
import {Virement} from "../../../../data/commandes.model";

@Component({
  selector: 'app-card-input-virement',
  templateUrl: './card-input-virement.component.html',
  styleUrls: ['./card-input-virement.component.scss'],
})
export class CardInputVirementComponent  implements OnInit {
  showInputs = true;
  @Input() commande!: Virement;
  @Input() disabled!: boolean;

  constructor() { }

  ngOnInit() {}

}
