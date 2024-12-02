import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-input-packaging-pret',
  templateUrl: './card-input-packaging-pret.component.html',
  styleUrls: ['./card-input-packaging-pret.component.scss'],
})
export class CardInputPackagingPretComponent  implements OnInit {
  @Input() commande!: {readyForPackaging: string};
  @Input() disabled!: boolean;

  constructor() { }

  ngOnInit() {}

}
