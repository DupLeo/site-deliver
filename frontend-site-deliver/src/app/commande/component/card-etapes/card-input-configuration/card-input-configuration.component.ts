import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-input-configuration',
  templateUrl: './card-input-configuration.component.html',
  styleUrls: ['./card-input-configuration.component.scss'],
})
export class CardInputConfigurationComponent  implements OnInit {

  constructor() { }

  @Input() commande! : { documentation: boolean, preparationFee: { enabled: boolean, type: string, amount: number, comment: string } }
  @Input() disabled!: boolean;


  ngOnInit() {}

}
