import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceGestionAccesCommandeService} from "../../../service/service-gestion-acces-commande.service";

@Component({
  selector: 'app-card-input-financement',
  templateUrl: './card-input-financement.component.html',
  styleUrls: ['./card-input-financement.component.scss'],
})
export class CardInputFinancementComponent  implements OnInit {
  @Input() commande!: { status: string }
  @Input() disabled!: boolean;
  @Output() valider = new EventEmitter<any>();

  ngOnInit() {
  }

  constructor() { }

  validerCommande() {
    this.valider.emit(this.commande);  // Émet les données à valider
  }
}
