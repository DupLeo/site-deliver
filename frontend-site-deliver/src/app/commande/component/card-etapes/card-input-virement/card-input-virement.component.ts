import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-input-virement',
  templateUrl: './card-input-virement.component.html',
  styleUrls: ['./card-input-virement.component.scss'],
})
export class CardInputVirementComponent  implements OnInit {
  showInputs = true;
  @Input() commande!: { status: boolean, commentaire: string} ;
  @Input() disabled!: boolean;

  constructor() { }

  ngOnInit() {}

}
