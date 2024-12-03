import {Component, Input, OnInit, ChangeDetectorRef, Output, EventEmitter} from '@angular/core';
import { Configuration } from "../../../../data/commandes.model";
import {ServiceGestionAccesCommandeService} from "../../../service/service-gestion-acces-commande.service";

@Component({
  selector: 'app-card-input-configuration',
  templateUrl: './card-input-configuration.component.html',
  styleUrls: ['./card-input-configuration.component.scss'],
})
export class CardInputConfigurationComponent implements OnInit {

  @Input() commande! : Configuration
  @Input() disabled!: boolean;
  @Output() valider = new EventEmitter<any>();

  ngOnInit() {
  }

  constructor() { }

  validerCommande() {
    this.valider.emit(this.commande);  // Émet les données à valider
  }
}
