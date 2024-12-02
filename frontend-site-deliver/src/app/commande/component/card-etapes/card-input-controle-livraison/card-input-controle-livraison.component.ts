import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-input-controle-livraison',
  templateUrl: './card-input-controle-livraison.component.html',
  styleUrls: ['./card-input-controle-livraison.component.scss'],
})
export class CardInputControleLivraisonComponent implements OnInit {

  @Input() commande!:  { passage: Boolean, date: Date, configuration: Boolean } ;

  selectedDate!: Date | undefined;  // Indique que cette propriété sera assignée plus tard

  constructor() { }

  ngOnInit() {
    this.selectedDate = this.commande?.date
  }
}

