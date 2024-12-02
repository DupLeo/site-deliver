import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-swipper-card-etape',
  templateUrl: './swipper-card-etape.component.html',
  styleUrls: ['./swipper-card-etape.component.scss'],
})
export class SwipperCardEtapeComponent  implements OnInit {
  @Input() commande!: { name: string; status: string; etapesHistorique: { [key: string]: { donnees: any } } };

  indiceEtape = {
    disponibilite: 1,
    configuration: 2,
    controleLivraison: 3,
    financement: 4,
    virement:5,
    dateLivraison: 6,
    packaging: 7
  }
  constructor() { }

  ngOnInit() {
  }

  getLastIndex(): number {
    const validSteps = Object.keys(this.commande.etapesHistorique).filter(key => this.autorisationAccesEtape(key as keyof typeof this.indiceEtape));
    return validSteps.length;
  }

  autorisationAccesEtape(etape: keyof typeof this.indiceEtape): boolean {
    const statusIndex = this.indiceEtape[this.commande.status as keyof typeof this.indiceEtape];
    return this.indiceEtape[etape] <= statusIndex;
  }
}
