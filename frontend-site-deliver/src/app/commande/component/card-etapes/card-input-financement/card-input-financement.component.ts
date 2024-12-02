import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-input-financement',
  templateUrl: './card-input-financement.component.html',
  styleUrls: ['./card-input-financement.component.scss'],
})
export class CardInputFinancementComponent  implements OnInit {
  @Input() commande!: { status: string }
  @Input() disabled!: boolean;


constructor() { }

  ngOnInit() {}

}
