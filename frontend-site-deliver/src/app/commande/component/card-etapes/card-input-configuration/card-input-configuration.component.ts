import {Component, Input, OnInit} from '@angular/core';
import {Configuration} from "../../../../data/commandes.model";

@Component({
  selector: 'app-card-input-configuration',
  templateUrl: './card-input-configuration.component.html',
  styleUrls: ['./card-input-configuration.component.scss'],
})
export class CardInputConfigurationComponent  implements OnInit {

  constructor() { }

  @Input() commande! : Configuration
  @Input() disabled!: boolean;


  ngOnInit() {}

}
